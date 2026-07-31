"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import NotebookService from "@/services/notebook.service";

import {
  Notebook,
  CreateNotebookRequest,
} from "@/types/notebook";

interface NotebookContextType {
  notebooks: Notebook[];

  loading: boolean;

  refresh: () => Promise<void>;

  createNotebook: (
    notebook: CreateNotebookRequest
  ) => Promise<void>;

  deleteNotebook: (
    id: string
  ) => Promise<void>;
}

const NotebookContext =
  createContext<NotebookContextType | null>(
    null
  );

export function NotebookProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [notebooks, setNotebooks] =
    useState<Notebook[]>([]);

  const [loading, setLoading] =
    useState(true);

  async function refresh() {
    setLoading(true);

    try {
      const data =
        await NotebookService.getAll();

      setNotebooks(data);
    } finally {
      setLoading(false);
    }
  }

  async function createNotebook(
    notebook: CreateNotebookRequest
  ) {
    await NotebookService.create(notebook);

    await refresh();
  }

  async function deleteNotebook(
    id: string
  ) {
    await NotebookService.delete(id);

    await refresh();
  }

  useEffect(() => {
    refresh();
  }, []);

  return (
    <NotebookContext.Provider
      value={{
        notebooks,
        loading,
        refresh,
        createNotebook,
        deleteNotebook,
      }}
    >
      {children}
    </NotebookContext.Provider>
  );
}

export function useNotebook() {
  const context =
    useContext(NotebookContext);

  if (!context)
    throw new Error(
      "NotebookContext missing"
    );

  return context;
}