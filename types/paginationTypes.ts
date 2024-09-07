export type PaginationResponse<T> = {
  items: T[];
  page: number;
  pageSize: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  hasPagination: boolean;
};
