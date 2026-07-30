import type { editor } from "monaco-editor";

export const editorOptions: editor.IStandaloneEditorConstructionOptions = {
  automaticLayout: true,

  minimap: {
    enabled: false,
  },

  fontSize: 15,

  fontLigatures: true,

  wordWrap: "on",

  lineNumbers: "on",

  glyphMargin: false,

  folding: true,

  lineDecorationsWidth: 10,

  renderLineHighlight: "line",

  scrollBeyondLastLine: false,

  roundedSelection: true,

  smoothScrolling: true,

  cursorBlinking: "smooth",

  cursorSmoothCaretAnimation: "on",

  tabSize: 4,

  insertSpaces: true,

  detectIndentation: false,

  padding: {
    top: 16,
    bottom: 16,
  },

  overviewRulerBorder: false,

  contextmenu: true,

  bracketPairColorization: {
    enabled: true,
  },

  guides: {
    bracketPairs: true,
    indentation: true,
  },
};