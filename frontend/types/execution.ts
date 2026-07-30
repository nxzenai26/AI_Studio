import type { NotebookOutput } from "./output";

export type CellExecutionStatus =
  | "idle"
  | "queued"
  | "running"
  | "success"
  | "error";

export interface ExecuteCellRequest {
  notebookId: string;

  cellId: string;

  code: string;
}

export interface ExecuteCellResponse {
  success: boolean;

  execution_count: number;

  outputs: NotebookOutput[];

  execution_time: number;
}

export interface RunAllResponse {
  success: boolean;

  notebookId: string;
}

export interface ExecutionQueueItem {
  notebookId: string;

  cellId: string;

  code: string;

  status: CellExecutionStatus;
}