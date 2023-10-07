export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

export type GetAllProductResponse = Array<Product>;
export type GetAllProductRequest = {
  limit?: number;
  sort?: 'asc' | 'desc';
};
