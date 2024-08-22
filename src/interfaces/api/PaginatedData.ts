interface PaginatedDataInterface<T> {
  data: T[];
  total: number;
  totalPages: number;
}

export default PaginatedDataInterface;
