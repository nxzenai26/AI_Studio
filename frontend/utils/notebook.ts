import type { NotebookCell } from "@/types/notebook";

export function createCodeCell(notebookId: string): NotebookCell {
  return {
    id: crypto.randomUUID(),
    notebook_id: notebookId,
    cell_type: "code",
    source: "",
    execution_count: null,
    outputs: [],
    metadata: {},
    status: "idle",

execution_time: 0,

collapsed: false,

selected: false,
  };
}

export function createMarkdownCell(notebookId: string): NotebookCell {
  return {
    id: crypto.randomUUID(),
    notebook_id: notebookId,
    cell_type: "markdown",
    source: "# New Markdown",
    execution_count: null,
    outputs: [],
    metadata: {},
    status: "idle",

execution_time: 0,

collapsed: false,

selected: false,
  };
}