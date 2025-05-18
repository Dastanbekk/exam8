export interface ProductType {
  id: string;
  name: string;
  img: string;
  image: string;
  rate: number;
  currentPrice: number;
  price?: number | undefined;
  discount?: number;
  description?: string;
}
