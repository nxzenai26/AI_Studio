import type { editor } from "monaco-editor";

export function defineAIStudioTheme(monaco: typeof import("monaco-editor")) {
  monaco.editor.defineTheme("ai-studio-dark", {
    base: "vs-dark",

    inherit: true,

    rules: [
      {
        token: "",
        foreground: "E2E8F0",
        background: "0F172A",
      },
    ],

    colors: {
      "editor.background": "#0F172A",

      "editor.foreground": "#E2E8F0",

      "editor.lineHighlightBackground": "#1E293B",

      "editorCursor.foreground": "#3B82F6",

      "editorLineNumber.foreground": "#64748B",

      "editor.selectionBackground": "#1D4ED8",

      "editor.inactiveSelectionBackground": "#1E3A8A",
    },
  });
}