"use client";

import type { NotebookOutput } from "@/types/output";

interface Props {
  output: NotebookOutput;
}

export default function ExecuteResultOutput({
  output,
}: Props) {
  return (
    <div className="rounded-md bg-slate-950 p-4">
      <pre className="overflow-x-auto text-sm text-slate-200">
        {JSON.stringify(
          output.data,
          null,
          2
        )}
      </pre>
    </div>
  );
}