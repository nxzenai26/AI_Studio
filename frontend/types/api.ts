export interface ApiResponse<T> {
  success: boolean;

  message?: string;

  data: T;
}

export interface ApiError {
  success: false;

  message: string;

  statusCode: number;
}

export interface Pagination {
  page: number;

  pageSize: number;

  total: number;

  totalPages: number;
}

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}
/**
 * Generic API response returned by the FastAPI backend.
 */

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

/**
 * Generic paginated response.
 */

export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    page_size: number;
    total_pages: number;
}