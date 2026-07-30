export interface EditorPosition {
  line: number;

  column: number;
}

export interface EditorSelection {
  start: EditorPosition;

  end: EditorPosition;
}

export interface EditorState {
  language: string;

  readOnly: boolean;

  tabSize: number;

  wordWrap: boolean;

  minimap: boolean;

  fontSize: number;
}