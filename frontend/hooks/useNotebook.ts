"use client";

import { useState } from "react";

import type {
  Notebook,
  NotebookCell,
} from "@/types/notebook";

import {
  createCodeCell,
  createMarkdownCell,
} from "@/utils/notebook";

export function useNotebook(
  initialNotebook: Notebook
) {
  const [notebook, setNotebook] =
    useState<Notebook>(initialNotebook);

  /**
   * Add a new Python code cell.
   */
  const addCodeCell = () => {
    setNotebook((prev) => ({
      ...prev,
      cells: [
        ...prev.cells,
        createCodeCell(prev.id),
      ],
    }));
  };

  /**
   * Add a new Markdown cell.
   */
  const addMarkdownCell = () => {
    setNotebook((prev) => ({
      ...prev,
      cells: [
        ...prev.cells,
        createMarkdownCell(prev.id),
      ],
    }));
  };

  /**
   * Delete a notebook cell.
   */
  const deleteCell = (
    cellId: string
  ) => {
    setNotebook((prev) => ({
      ...prev,
      cells: prev.cells.filter(
        (cell) => cell.id !== cellId
      ),
    }));
  };

  /**
   * Duplicate an existing cell.
   */
  const duplicateCell = (
    cell: NotebookCell
  ) => {
    const duplicated: NotebookCell = {
      ...cell,
      id: crypto.randomUUID(),
    };

    setNotebook((prev) => ({
      ...prev,
      cells: [
        ...prev.cells,
        duplicated,
      ],
    }));
  };

  /**
   * Move a cell up or down.
   */
  const moveCell = (
    cellId: string,
    direction: "up" | "down"
  ) => {
    setNotebook((prev) => {
      const cells = [...prev.cells];

      const index = cells.findIndex(
        (cell) => cell.id === cellId
      );

      if (index === -1) {
        return prev;
      }

      const swapIndex =
        direction === "up"
          ? index - 1
          : index + 1;

      if (
        swapIndex < 0 ||
        swapIndex >= cells.length
      ) {
        return prev;
      }

      [cells[index], cells[swapIndex]] =
        [
          cells[swapIndex],
          cells[index],
        ];

      return {
        ...prev,
        cells,
      };
    });
  };

  /**
   * Update only the source code / markdown.
   */
  const updateCellSource = (
    cellId: string,
    source: string
  ) => {
    setNotebook((prev) => ({
      ...prev,
      cells: prev.cells.map((cell) =>
        cell.id === cellId
          ? {
              ...cell,
              source,
            }
          : cell
      ),
    }));
  };

  /**
   * Update any notebook cell property.
   */
  const updateCell = (
    cellId: string,
    updates: Partial<NotebookCell>
  ) => {
    setNotebook((prev) => ({
      ...prev,
      cells: prev.cells.map((cell) =>
        cell.id === cellId
          ? {
              ...cell,
              ...updates,
            }
          : cell
      ),
    }));
  };

  return {
    notebook,

    addCodeCell,

    addMarkdownCell,

    deleteCell,

    duplicateCell,

    moveCell,

    updateCellSource,

    updateCell,
  };
}