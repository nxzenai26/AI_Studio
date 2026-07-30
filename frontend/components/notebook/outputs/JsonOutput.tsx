"use client";

interface Props {
  json: unknown;
}

export default function JsonOutput({
  json,
}: Props) {
  return (
    <pre className="overflow-x-auto bg-slate-950 p-4 text-sm text-cyan-300">
      {JSON.stringify(
        json,
        null,
        2
      )}
    </pre>
  );
}