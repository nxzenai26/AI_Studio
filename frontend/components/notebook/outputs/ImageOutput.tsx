"use client";

interface Props {
  base64: string;
}

export default function ImageOutput({
  base64,
}: Props) {
  return (
    <img
      src={`data:image/png;base64,${base64}`}
      alt="Notebook Output"
      className="max-w-full rounded-lg p-4"
    />
  );
}