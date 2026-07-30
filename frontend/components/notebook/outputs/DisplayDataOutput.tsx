"use client";

import type { NotebookOutput } from "@/types/output";

import HtmlOutput from "./HtmlOutput";
import ImageOutput from "./ImageOutput";
import JsonOutput from "./JsonOutput";
import MarkdownOutput from "./MarkdownOutput";

interface Props {
  output: NotebookOutput;
}

export default function DisplayDataOutput({
  output,
}: Props) {
  if (!output.data)
    return null;

  if (output.data["text/html"]) {
    return (
      <HtmlOutput
        html={
          output.data[
            "text/html"
          ] as string
        }
      />
    );
  }

  if (output.data["image/png"]) {
    return (
      <ImageOutput
        base64={
          output.data[
            "image/png"
          ] as string
        }
      />
    );
  }

  if (
    output.data[
      "application/json"
    ]
  ) {
    return (
      <JsonOutput
        json={
          output.data[
            "application/json"
          ]
        }
      />
    );
  }

  if (
    output.data[
      "text/markdown"
    ]
  ) {
    return (
      <MarkdownOutput
        markdown={
          output.data[
            "text/markdown"
          ] as string
        }
      />
    );
  }

  return (
    <pre className="p-4">
      {JSON.stringify(
        output.data,
        null,
        2
      )}
    </pre>
  );
}