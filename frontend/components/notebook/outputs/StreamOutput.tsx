"use client";

import type { NotebookOutput } from "@/types/output";

interface Props {
  output: NotebookOutput;
}

export default function StreamOutput({
  output,
}: Props) {
  return (
    <pre className="overflow-x-auto border-l-4 border-green-500 bg-slate-950 p-4 font-mono text-sm text-green-300">
      {output.text}
    </pre>
  );
}