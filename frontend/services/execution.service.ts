import api from "@/lib/api";

import { NOTEBOOK_ENDPOINT } from "@/lib/constants";

import type {
  ExecuteCellRequest,
  ExecuteCellResponse,
} from "@/types/execution";

/**
 * Execute a single notebook cell
 * POST /api/v1/notebooks/{notebook_id}/cells/{cell_id}/execute
 */
export async function executeCell(
  request: ExecuteCellRequest
): Promise<ExecuteCellResponse> {
  const response = await api.post<ExecuteCellResponse>(
    `${NOTEBOOK_ENDPOINT}/${request.notebookId}/cells/${request.cellId}/execute`,
    {
      code: request.code,
    }
  );

  return response.data;
}

/**
 * Clear outputs of a cell
 * POST /api/v1/notebooks/{notebook_id}/cells/{cell_id}/clear
 */
export async function clearOutputs(
  notebookId: string,
  cellId: string
) {
  const response = await api.post(
    `${NOTEBOOK_ENDPOINT}/${notebookId}/cells/${cellId}/clear`
  );

  return response.data;
}

/**
 * Restart notebook kernel
 * POST /api/v1/notebooks/{notebook_id}/restart
 */
export async function restartNotebook(
  notebookId: string
) {
  const response = await api.post(
    `${NOTEBOOK_ENDPOINT}/${notebookId}/restart`
  );

  return response.data;
}

/**
 * Interrupt notebook execution
 * POST /api/v1/notebooks/{notebook_id}/interrupt
 */
export async function interruptExecution(
  notebookId: string
) {
  const response = await api.post(
    `${NOTEBOOK_ENDPOINT}/${notebookId}/interrupt`
  );

  return response.data;
}

/**
 * Shutdown notebook kernel
 * POST /api/v1/notebooks/{notebook_id}/shutdown
 */
export async function shutdownNotebook(
  notebookId: string
) {
  const response = await api.post(
    `${NOTEBOOK_ENDPOINT}/${notebookId}/shutdown`
  );

  return response.data;
}