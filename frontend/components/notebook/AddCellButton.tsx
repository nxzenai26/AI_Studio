"use client";

import { Plus } from "lucide-react";

interface AddCellButtonProps {
  onClick?: () => void;
}

export default function AddCellButton({
  onClick,
}: AddCellButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-slate-700 py-5 text-slate-400 transition hover:border-blue-500 hover:text-white"
    >
      <Plus size={18} />

      Add New Cell
    </button>
  );
}