"use client";

interface Props {
  markdown: string;
}

export default function MarkdownOutput({
  markdown,
}: Props) {
  return (
    <div className="prose prose-invert max-w-none p-4 whitespace-pre-wrap">
      {markdown}
    </div>
  );
}