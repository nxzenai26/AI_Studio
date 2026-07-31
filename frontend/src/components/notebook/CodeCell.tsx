"use client";

import { useEffect, useState } from "react";

import { Cell } from "@/types/cell";

interface CodeCellProps {
  cell: Cell;
  onChange?: (value: string) => void;
}

export default function CodeCell({
  cell,
  onChange,
}: CodeCellProps) {
  const [code, setCode] = useState(cell.source);

  useEffect(() => {
    setCode(cell.source);
  }, [cell.source]);

  function handleChange(
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const value = e.target.value;

    setCode(value);

    onChange?.(value);
  }

  return (
    <div className="overflow-hidden rounded-lg border border-slate-700 bg-[#0F172A]">

      <div className="border-b border-slate-700 bg-slate-900 px-4 py-2">

        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-400">
          Python
        </span>

      </div>

      <textarea
        value={code}
        onChange={handleChange}
        spellCheck={false}
        className="
            min-h-[180px]
            w-full
            resize-none
            border-none
            bg-[#0F172A]
            p-5
            font-mono
            text-[15px]
            leading-7
            text-slate-200
            outline-none
        "
        placeholder="Write Python code..."
      />

    </div>
  );
}