"use client";

import { FileCode2 } from "lucide-react";

interface EmptyNotebookProps {
  onCreateCell?: () => void;
}

import AddCellButton from "./AddCellButton";

export default function EmptyNotebook({
  onCreateCell,
}: EmptyNotebookProps) {
  return (
    <div className="flex flex-col items-center justify-center py-24">
      <FileCode2
        size={72}
        className="mb-6 text-slate-600"
      />

      <h2 className="text-2xl font-semibold text-white">
        Empty Notebook
      </h2>

      <p className="mt-2 mb-8 text-slate-400">
        Start by creating your first code cell.
      </p>

      <div className="w-full max-w-md">
        <AddCellButton
          onClick={onCreateCell}
        />
      </div>
    </div>
  );
}