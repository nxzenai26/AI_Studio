"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import notebookService from "@/services/notebook.service";
import cellService from "@/services/cell.service";

import { Notebook } from "@/types/notebook";
import { Cell } from "@/types/cell";

interface NotebookEditorContextType {
  notebook: Notebook | null;
  cells: Cell[];

  loading: boolean;
  saving: boolean;

  error: string | null;

  activeCellId: string | null;
  selectedCellId: string | null;

  loadNotebook: (id: string) => Promise<void>;
  refreshCells: () => Promise<void>;

  createCodeCell: () => Promise<void>;
  createMarkdownCell: () => Promise<void>;

  deleteCell: (cellId: string) => Promise<void>;
  duplicateCell: (cellId: string) => Promise<void>;

  setCells: React.Dispatch<React.SetStateAction<Cell[]>>;

  setActiveCellId: React.Dispatch<
    React.SetStateAction<string | null>
  >;

  setSelectedCellId: React.Dispatch<
    React.SetStateAction<string | null>
  >;
}

const NotebookEditorContext =
  createContext<NotebookEditorContextType | null>(
    null
  );

interface Props {
  notebookId: string;
  children: ReactNode;
}

export function NotebookEditorProvider({
  notebookId,
  children,
}: Props) {
  const [notebook, setNotebook] =
    useState<Notebook | null>(null);

  const [cells, setCells] = useState<Cell[]>([]);

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  const [error, setError] =
    useState<string | null>(null);

  const [activeCellId, setActiveCellId] =
    useState<string | null>(null);

  const [selectedCellId, setSelectedCellId] =
    useState<string | null>(null);

  //////////////////////////////////////////////////////
  // NOTEBOOK
  //////////////////////////////////////////////////////

  async function loadNotebook(id: string) {
    try {
      setLoading(true);
      setError(null);

      const notebookData =
        await notebookService.get(id);

      const notebookCells =
        await cellService.list(id);

      setNotebook(notebookData);

      setCells(notebookCells);

      if (notebookCells.length > 0) {
        setActiveCellId(notebookCells[0].id);
        setSelectedCellId(notebookCells[0].id);
      }
    } catch (err) {
      console.error(err);

      setError("Failed to load notebook.");
    } finally {
      setLoading(false);
    }
  }

  async function refreshCells(): Promise<Cell[]> {
  if (!notebook) return [];

  try {
    const updated =
      await cellService.list(notebook.id);

    setCells(updated);

    return updated;
  } catch (err) {
    console.error(err);
    return [];
  }
}

  //////////////////////////////////////////////////////
  // CREATE
  //////////////////////////////////////////////////////

  async function createCell(
    type: "code" | "markdown"
  ) {
    if (!notebook) return;

    try {
      setSaving(true);
      setError(null);

      const newCell =
        await cellService.create(
          notebook.id,
          {
            cell_type: type,
            source: "",
            position: cells.length,
          }
        );

      setCells((prev) => [
        ...prev,
        newCell,
      ]);

      setActiveCellId(newCell.id);
      setSelectedCellId(newCell.id);
    } catch (err) {
      console.error(err);

      setError("Unable to create cell.");
    } finally {
      setSaving(false);
    }
  }

  async function createCodeCell() {
    await createCell("code");
  }

  async function createMarkdownCell() {
    await createCell("markdown");
  }

  //////////////////////////////////////////////////////
  // DELETE
  //////////////////////////////////////////////////////

  async function deleteCell(cellId: string) {
    if (!notebook) return;

    try {
      setSaving(true);

      await cellService.delete(
        notebook.id,
        cellId
      );

      await cellService.delete(
  notebook.id,
  cellId
);

// Reload the latest cells from backend
await refreshCells();

const latestCells = await cellService.list(notebook.id);

if (latestCells.length > 0) {
  setActiveCellId(latestCells[0].id);
  setSelectedCellId(latestCells[0].id);
} else {
  setActiveCellId(null);
  setSelectedCellId(null);
}
    } catch (err) {
      console.error(err);

      setError("Unable to delete cell.");
    } finally {
      setSaving(false);
    }
  }

  //////////////////////////////////////////////////////
  // DUPLICATE
  //////////////////////////////////////////////////////

  async function duplicateCell(
    cellId: string
  ) {
    if (!notebook) return;

    try {
      setSaving(true);

      const original =
        cells.find(
          (cell) => cell.id === cellId
        );

      if (!original) return;

      const duplicated =
        await cellService.create(
          notebook.id,
          {
            cell_type:
              original.cell_type,

            source:
              original.source,

            position:
              cells.length,
          }
        );

      setCells((prev) => [
        ...prev,
        duplicated,
      ]);

      setActiveCellId(
        duplicated.id
      );

      setSelectedCellId(
        duplicated.id
      );
    } catch (err) {
      console.error(err);

      setError(
        "Unable to duplicate cell."
      );
    } finally {
      setSaving(false);
    }
  }

  //////////////////////////////////////////////////////
  // EFFECTS
  //////////////////////////////////////////////////////

  useEffect(() => {
    loadNotebook(notebookId);
  }, [notebookId]);
  //////////////////////////////////////////////////////
  // PROVIDER
  //////////////////////////////////////////////////////

  return (
    <NotebookEditorContext.Provider
      value={{
        notebook,

        cells,

        loading,
        saving,

        error,

        activeCellId,
        selectedCellId,

        loadNotebook,
        refreshCells,

        createCodeCell,
        createMarkdownCell,

        deleteCell,
        duplicateCell,

        setCells,

        setActiveCellId,
        setSelectedCellId,
      }}
    >
      {children}
    </NotebookEditorContext.Provider>
  );
}

//////////////////////////////////////////////////////
// HOOK
//////////////////////////////////////////////////////

export function useNotebookEditor() {
  const context = useContext(
    NotebookEditorContext
  );

  if (!context) {
    throw new Error(
      "useNotebookEditor must be used inside NotebookEditorProvider."
    );
  }

  return context;
}