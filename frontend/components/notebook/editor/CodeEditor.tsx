"use client";

import Editor from "@monaco-editor/react";
import { editorOptions } from "./editorOptions";
import { defineAIStudioTheme } from "./editorTheme";

interface CodeEditorProps {
  language?: string;
  value: string;
  onChange?: (value: string) => void;
}

export default function CodeEditor({
  language = "python",
  value,
  onChange,
}: CodeEditorProps) {
  return (
    <Editor
      language={language}
      value={value}
      height="220px"
      theme="ai-studio-dark"
      beforeMount={(monaco) => {
        defineAIStudioTheme(monaco);
      }}
      options={editorOptions}
      onChange={(value) => {
        onChange?.(value ?? "");
      }}
    />
  );
}