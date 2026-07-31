"use client";

import { useEffect, useState } from "react";

import { Cell } from "@/types/cell";

interface MarkdownCellProps {
  cell: Cell;
  onChange?: (value: string) => void;
}

export default function MarkdownCell({
  cell,
  onChange,
}: MarkdownCellProps) {
  const [text, setText] = useState(cell.source);

  useEffect(() => {
    setText(cell.source);
  }, [cell.source]);

  function handleChange(
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const value = e.target.value;

    setText(value);

    onChange?.(value);
  }

  return (
    <div className="overflow-hidden rounded-lg border border-slate-700 bg-slate-900">

      <div className="border-b border-slate-700 bg-[#111827] px-4 py-2">

        <span className="text-xs font-semibold uppercase tracking-wider text-green-400">
          Markdown
        </span>

      </div>

      <textarea
        value={text}
        onChange={handleChange}
        spellCheck={false}
        className="
            min-h-[180px]
            w-full
            resize-none
            border-none
            bg-slate-900
            p-5
            text-base
            leading-7
            text-slate-200
            outline-none
        "
        placeholder="# Write Markdown..."
      />

    </div>
  );
}