"use client";

import {
  Play,
  Loader2,
  Trash2,
  Copy,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

interface CellToolbarProps {
  onRun: () => void;

  running: boolean;

  onDelete?: () => void;

  onDuplicate?: () => void;

  onMoveUp?: () => void;

  onMoveDown?: () => void;
}

const iconButton =
  "rounded-md p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white disabled:cursor-not-allowed disabled:opacity-50";

const runButton =
  "flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50";

export default function CellToolbar({
  onRun,
  running,
  onDelete,
  onDuplicate,
  onMoveUp,
  onMoveDown,
}: CellToolbarProps) {
  return (
    <div className="flex items-center gap-2">
      {/* Run Button */}
      <button
        type="button"
        onClick={onRun}
        disabled={running}
        className={runButton}
      >
        {running ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Play className="h-4 w-4" />
        )}

        <span>Run</span>
      </button>

      {/* Duplicate */}
      <button
        type="button"
        onClick={onDuplicate}
        className={iconButton}
      >
        <Copy size={16} />
      </button>

      {/* Move Up */}
      <button
        type="button"
        onClick={onMoveUp}
        className={iconButton}
      >
        <ArrowUp size={16} />
      </button>

      {/* Move Down */}
      <button
        type="button"
        onClick={onMoveDown}
        className={iconButton}
      >
        <ArrowDown size={16} />
      </button>

      {/* Delete */}
      <button
        type="button"
        onClick={onDelete}
        className={iconButton}
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}