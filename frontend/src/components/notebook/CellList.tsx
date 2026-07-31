"use client";

import useNotebookEditor from "@/hooks/useNotebookEditor";

import CellContainer from "./CellContainer";
import CodeCell from "./CodeCell";
import MarkdownCell from "./MarkdownCell";
import EmptyNotebook from "./EmptyNotebook";
import AddCellButton from "./AddCellButton";

export default function CellList() {
  const {
    cells,
    loading,
    createCodeCell,
    createMarkdownCell,
  } = useNotebookEditor();

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-lg text-slate-400">
          Loading notebook...
        </p>
      </div>
    );
  }

  if (!cells || cells.length === 0) {
    return (
      <div className="space-y-8">
        <EmptyNotebook />

        <AddCellButton
          onAddCode={createCodeCell}
          onAddMarkdown={createMarkdownCell}
        />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {cells.map((cell) => (
        <div
          key={cell.id}
          className="space-y-5"
        >
          <CellContainer cell={cell}>
            {cell.cell_type === "code" ? (
              <CodeCell cell={cell} />
            ) : (
              <MarkdownCell cell={cell} />
            )}
          </CellContainer>

          <AddCellButton
            onAddCode={createCodeCell}
            onAddMarkdown={createMarkdownCell}
          />
        </div>
      ))}
    </div>
  );
}