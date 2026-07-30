"use client";

import {
  Play,
  Save,
  Plus,
  SquarePen,
  RotateCcw,
  Hand,
} from "lucide-react";

import { useKernel } from "@/hooks/useKernel";

interface Props {
  notebookId: string;

  onAddCodeCell: () => void;

  onAddMarkdownCell: () => void;

  onRunAll?: () => void;

  onSave?: () => void;
}

const buttonClass =
  "flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white disabled:cursor-not-allowed disabled:opacity-50";

export default function NotebookToolbar({
  notebookId,
  onAddCodeCell,
  onAddMarkdownCell,
  onRunAll,
  onSave,
}: Props) {
  const {
    status,
    loading,
    restart,
    interrupt,
  } = useKernel(notebookId);

  const statusConfig = {
    idle: {
      color: "bg-green-500",
      text: "Idle",
    },
    busy: {
      color: "bg-yellow-500",
      text: "Busy",
    },
    starting: {
      color: "bg-blue-500",
      text: "Starting",
    },
    restarting: {
      color: "bg-orange-500",
      text: "Restarting",
    },
    interrupting: {
      color: "bg-purple-500",
      text: "Interrupting",
    },
    dead: {
      color: "bg-red-500",
      text: "Dead",
    },
  };

  const currentStatus =
    statusConfig[status] ?? statusConfig.dead;

  return (
    <div className="flex items-center gap-3 border-b border-slate-800 bg-slate-950 px-4 py-3">

      {/* Run All */}
      <button
        className={buttonClass}
        onClick={onRunAll}
      >
        <Play size={16} />
        Run All
      </button>

      {/* Add Code Cell */}
      <button
        className={buttonClass}
        onClick={onAddCodeCell}
      >
        <Plus size={16} />
        Code Cell
      </button>

      {/* Add Markdown Cell */}
      <button
        className={buttonClass}
        onClick={onAddMarkdownCell}
      >
        <SquarePen size={16} />
        Markdown
      </button>

      {/* Restart Kernel */}
      <button
        className={buttonClass}
        onClick={restart}
        disabled={loading}
      >
        <RotateCcw size={16} />
        Restart
      </button>

      {/* Interrupt */}
      <button
        className={buttonClass}
        onClick={interrupt}
        disabled={loading}
      >
        <Hand size={16} />
        Interrupt
      </button>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Kernel Status */}
      <div className="flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900 px-3 py-2">

        <span
          className={`h-2.5 w-2.5 rounded-full ${currentStatus.color}`}
        />

        <span className="text-sm text-slate-300">
          {currentStatus.text}
        </span>

      </div>

      {/* Save */}
      <button
        className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        onClick={onSave}
      >
        <Save size={16} />
        Save
      </button>

    </div>
  );
}