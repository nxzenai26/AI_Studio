import type { NotebookOutput } from "./output";

export type CellType =
    | "code"
    | "markdown";

export interface Cell {

    id: string;

    cell_type: CellType;

    source: string;

    outputs: NotebookOutput[];

    execution_count: number;

    metadata: Record<string, unknown>;

    position: number;

    created_at: string;

    updated_at: string;

}

/**
 * Frontend editable cell
 */

export interface EditorCell extends Cell {

    selected: boolean;

    collapsed: boolean;

    isExecuting: boolean;

}

export interface CreateCellRequest {

    cell_type: CellType;

    source: string;

}

export interface UpdateCellRequest {

    source?: string;

    metadata?: Record<string, unknown>;

    position?: number;

}