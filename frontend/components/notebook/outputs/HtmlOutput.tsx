"use client";

interface Props {
  html: string;
}

export default function HtmlOutput({
  html,
}: Props) {
  return (
    <div
      className="prose prose-invert max-w-none p-4"
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
}