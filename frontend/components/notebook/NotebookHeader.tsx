"use client";

import { FileCode2, Circle } from "lucide-react";

interface NotebookHeaderProps {
  notebookName?: string;
  kernelName?: string;
  isSaved?: boolean;
}

export default function NotebookHeader({
  notebookName = "Untitled.ipynb",
  kernelName = "Python 3.14",
  isSaved = true,
}: NotebookHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-6 py-4">
      <div className="flex items-center gap-3">
        <FileCode2
          size={22}
          className="text-blue-500"
        />

        <div>
          <h2 className="text-lg font-semibold text-white">
            {notebookName}
          </h2>

          <p className="text-sm text-slate-400">
            Interactive Notebook
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm text-slate-400">
        <div className="flex items-center gap-2">
          <Circle
            size={10}
            fill="#22C55E"
            className="text-green-500"
          />

          {kernelName}
        </div>

        <span>
          {isSaved ? "Saved" : "Unsaved"}
        </span>
      </div>
    </div>
  );
}