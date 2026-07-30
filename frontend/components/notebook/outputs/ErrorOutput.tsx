"use client";

import type { NotebookOutput } from "@/types/output";

interface Props {
  output: NotebookOutput;
}

export default function ErrorOutput({
  output,
}: Props) {
  return (
    <div className="border-l-4 border-red-500 bg-red-950/30 p-4">
      <h3 className="font-semibold text-red-400">
        {output.ename}
      </h3>

      <p className="mb-3 text-red-300">
        {output.evalue}
      </p>

      {output.traceback?.map(
        (line, index) => (
          <pre
            key={index}
            className="overflow-x-auto text-xs text-red-200"
          >
            {line}
          </pre>
        )
      )}
    </div>
  );
}