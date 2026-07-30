import api from "@/lib/api";

import type { Notebook } from "@/types/notebook";
import type { ApiResponse } from "@/types/api";

import {
    NOTEBOOK_ENDPOINT,
} from "@/lib/constants";

/**
 * Get all notebooks
 */
export async function listNotebooks(): Promise<Notebook[]> {
    const response = await api.get<ApiResponse<Notebook[]>>(
        NOTEBOOK_ENDPOINT
    );

    return response.data.data;
}

/**
 * Get a notebook by ID
 */
export async function getNotebook(
    id: string
): Promise<Notebook> {
    const response = await api.get<ApiResponse<Notebook>>(
        `${NOTEBOOK_ENDPOINT}/${id}`
    );

    return response.data.data;
}

/**
 * Create a new notebook
 */
export async function createNotebook(
    notebook: Partial<Notebook>
): Promise<Notebook> {
    const response = await api.post<ApiResponse<Notebook>>(
        NOTEBOOK_ENDPOINT,
        notebook
    );

    return response.data.data;
}

/**
 * Update an existing notebook
 */
export async function updateNotebook(
    notebook: Notebook
): Promise<Notebook> {
    const response = await api.put<ApiResponse<Notebook>>(
        `${NOTEBOOK_ENDPOINT}/${notebook.id}`,
        notebook
    );

    return response.data.data;
}

/**
 * Delete a notebook
 */
export async function deleteNotebook(
    id: string
): Promise<boolean> {
    const response = await api.delete<ApiResponse<null>>(
        `${NOTEBOOK_ENDPOINT}/${id}`
    );

    return response.data.success;
}