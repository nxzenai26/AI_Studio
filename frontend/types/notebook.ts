import type { EditorCell } from "./cell";

/* -------------------------------------------------------------------------- */
/*                              Common Types                                  */
/* -------------------------------------------------------------------------- */

export type NotebookVisibility = "private" | "public";

/* -------------------------------------------------------------------------- */
/*                         Notebook Summary Model                             */
/* -------------------------------------------------------------------------- */
/**
 * Returned by:
 * GET /api/v1/notebooks
 */
export interface NotebookSummary {
    id: string;
    title: string;
    description: string;
    visibility: NotebookVisibility;
    tags: string[];

    owner_id: string;

    created_at: string;
    updated_at: string;
}

/* -------------------------------------------------------------------------- */
/*                          Notebook Detail Model                             */
/* -------------------------------------------------------------------------- */
/**
 * Returned by:
 * GET /api/v1/notebooks/{notebook_id}
 *
 * This contains notebook metadata only.
 * Cells are retrieved separately.
 */
export interface NotebookDetail extends NotebookSummary {}

/* -------------------------------------------------------------------------- */
/*                         Frontend Notebook Editor                           */
/* -------------------------------------------------------------------------- */
/**
 * This model DOES NOT come from the backend.
 *
 * It is created inside NotebookContext by merging:
 *
 * GET /notebooks/{id}
 * +
 * GET /notebooks/{id}/cells
 */
export interface NotebookEditor extends NotebookDetail {
    cells: EditorCell[];
}

/* -------------------------------------------------------------------------- */
/*                        Create Notebook Request                             */
/* -------------------------------------------------------------------------- */

export interface CreateNotebookRequest {
    title: string;

    description?: string;

    visibility?: NotebookVisibility;

    tags?: string[];
}

/* -------------------------------------------------------------------------- */
/*                        Update Notebook Request                             */
/* -------------------------------------------------------------------------- */

export interface UpdateNotebookRequest {
    title?: string;

    description?: string;

    visibility?: NotebookVisibility;

    tags?: string[];
}

/* -------------------------------------------------------------------------- */
/*                        Delete Notebook Response                            */
/* -------------------------------------------------------------------------- */

export interface DeleteNotebookResponse {
    success: boolean;
    message: string;
}