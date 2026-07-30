import api from "@/lib/api";

import { NOTEBOOK_ENDPOINT } from "@/lib/constants";

import type { ApiResponse } from "@/types/api";

import type {
    Cell,
    CreateCellRequest,
    UpdateCellRequest,
} from "@/types/cell";

/* -------------------------------------------------------------------------- */
/*                               List Cells                                   */
/* -------------------------------------------------------------------------- */

export async function listCells(
    notebookId: string
): Promise<Cell[]> {

    const response =
        await api.get<ApiResponse<Cell[]>>(
            `${NOTEBOOK_ENDPOINT}/${notebookId}/cells`
        );

    return response.data.data;
}

/* -------------------------------------------------------------------------- */
/*                                Get Cell                                    */
/* -------------------------------------------------------------------------- */

export async function getCell(
    notebookId: string,
    cellId: string
): Promise<Cell> {

    const response =
        await api.get<ApiResponse<Cell>>(
            `${NOTEBOOK_ENDPOINT}/${notebookId}/cells/${cellId}`
        );

    return response.data.data;
}

/* -------------------------------------------------------------------------- */
/*                              Create Cell                                   */
/* -------------------------------------------------------------------------- */

export async function createCell(
    notebookId: string,
    payload: CreateCellRequest
): Promise<Cell> {

    const response =
        await api.post<ApiResponse<Cell>>(
            `${NOTEBOOK_ENDPOINT}/${notebookId}/cells`,
            payload
        );

    return response.data.data;
}

/* -------------------------------------------------------------------------- */
/*                              Update Cell                                   */
/* -------------------------------------------------------------------------- */

export async function updateCell(
    notebookId: string,
    cellId: string,
    payload: UpdateCellRequest
): Promise<Cell> {

    const response =
        await api.patch<ApiResponse<Cell>>(
            `${NOTEBOOK_ENDPOINT}/${notebookId}/cells/${cellId}`,
            payload
        );

    return response.data.data;
}

/* -------------------------------------------------------------------------- */
/*                              Delete Cell                                   */
/* -------------------------------------------------------------------------- */

export async function deleteCell(
    notebookId: string,
    cellId: string
): Promise<boolean> {

    const response =
        await api.delete<ApiResponse<null>>(
            `${NOTEBOOK_ENDPOINT}/${notebookId}/cells/${cellId}`
        );

    return response.data.success;
}