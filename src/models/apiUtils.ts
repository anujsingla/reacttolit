export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface IApiObject<T> {
  data: T;
  isFetching: boolean;
  isUpdating: boolean;
  isError: boolean;
  errorMessage: string;
  error: Error;
}
