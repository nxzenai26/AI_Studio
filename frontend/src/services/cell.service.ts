import api from "@/lib/api";

import {
  Cell,
  CellListResponse,
  CellResponse,
  CreateCellRequest,
  UpdateCellRequest,
  ReorderCellsRequest,
} from "@/types/cell";

class CellService {
  /**
   * Get all cells in a notebook
   */
  async list(notebookId: string): Promise<Cell[]> {
    try {
      const response = await api.get<CellListResponse>(
        `/notebooks/${notebookId}/cells`
      );

      return response.data.data;
    } catch (error) {
      console.error("Failed to fetch notebook cells:", error);
      throw error;
    }
  }

  /**
   * Get a single cell
   *
   * NOTE:
   * Your current backend DOES NOT expose:
   *
   * GET /notebooks/{notebookId}/cells/{cellId}
   *
   * Keep this method commented until the endpoint exists.
   */

  /*
  async get(
    notebookId: string,
    cellId: string
  ): Promise<Cell> {
    const response = await api.get<CellResponse>(
      `/notebooks/${notebookId}/cells/${cellId}`
    );

    return response.data.data;
  }
  */

  /**
   * Create a cell
   */
  async create(
    notebookId: string,
    payload: CreateCellRequest
  ): Promise<Cell> {
    try {
      const response = await api.post<CellResponse>(
        `/notebooks/${notebookId}/cells`,
        payload
      );

      return response.data.data;
    } catch (error) {
      console.error("Failed to create cell:", error);
      throw error;
    }
  }

  /**
   * Update a cell
   */
  async update(
    notebookId: string,
    cellId: string,
    payload: UpdateCellRequest
  ): Promise<Cell> {
    try {
      const response = await api.patch<CellResponse>(
        `/notebooks/${notebookId}/cells/${cellId}`,
        payload
      );

      return response.data.data;
    } catch (error) {
      console.error("Failed to update cell:", error);
      throw error;
    }
  }

  /**
   * Delete a cell
   */
  async delete(
    notebookId: string,
    cellId: string
  ): Promise<void> {
    try {
      await api.delete(
        `/notebooks/${notebookId}/cells/${cellId}`
      );
    } catch (error) {
      console.error("Failed to delete cell:", error);
      throw error;
    }
  }

  /**
   * Reorder notebook cells
   */
  async reorder(
    notebookId: string,
    payload: ReorderCellsRequest
  ): Promise<Cell[]> {
    try {
      const response = await api.post<CellListResponse>(
        `/notebooks/${notebookId}/cells/reorder`,
        payload
      );

      return response.data.data;
    } catch (error) {
      console.error("Failed to reorder cells:", error);
      throw error;
    }
  }

  /**
   * Duplicate Cell
   *
   * TEMPORARILY DISABLED
   *
   * Your backend currently does not expose:
   *
   * GET /notebooks/{notebookId}/cells/{cellId}
   *
   * We'll implement duplication inside NotebookEditorContext
   * using the cells already loaded in memory.
   */
}

export default new CellService();