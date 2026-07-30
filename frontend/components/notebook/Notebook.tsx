"use client";

import NotebookHeader from "./NotebookHeader";
import NotebookToolbar from "./NotebookToolbar";
import NotebookCell from "./NotebookCell";
import EmptyNotebook from "./EmptyNotebook";

import { useNotebook } from "@/hooks/useNotebook";

import type { Notebook } from "@/types/notebook";
import type { ExecuteCellResponse } from "@/types/execution";

interface Props {
  notebook: Notebook;
}

export default function NotebookPage({
  notebook: initialNotebook,
}: Props) {
  const {
    notebook,

    addCodeCell,

    addMarkdownCell,

    deleteCell,

    duplicateCell,

    moveCell,

    updateCellSource,

    updateCell,
  } = useNotebook(initialNotebook);

  /**
   * Handles execution result returned by the backend.
   */
  function handleExecutionComplete(
    cellId: string,
    result: ExecuteCellResponse
  ) {
    updateCell(cellId, {
      outputs: result.outputs,
      execution_count: result.execution_count,
      execution_time: result.execution_time,
      status: "success",
    });
  }
  function handleRunAll() {
  console.log("Run all cells");
}

function handleSave() {
  console.log("Save notebook");
}

  return (
    <div className="flex h-full flex-col rounded-xl border border-slate-800 bg-slate-950">
      <NotebookHeader
        notebookName={notebook.title}
      />

      <NotebookToolbar
        notebookId={notebook.id}
        onAddCodeCell={addCodeCell}
        onAddMarkdownCell={addMarkdownCell}
        onRunAll={handleRunAll}
        onSave={handleSave}
      />

      <div className="flex-1 overflow-auto p-6">
        {notebook.cells.length === 0 ? (
          <EmptyNotebook
            onCreateCell={addCodeCell}
          />
        ) : (
          <div className="space-y-6">
            {notebook.cells.map((cell) => (
              <NotebookCell
                key={cell.id}
                cell={cell}
                onChange={updateCellSource}
                onDelete={deleteCell}
                onDuplicate={duplicateCell}
                onMoveUp={() =>
                  moveCell(cell.id, "up")
                }
                onMoveDown={() =>
                  moveCell(cell.id, "down")
                }
                onExecutionComplete={
                  handleExecutionComplete
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}