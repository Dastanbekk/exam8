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

export interface Review {
  id: string;
  author: string;
  rating: number;
  verified: boolean;
  content: string;
  date: string;
}


export interface ColorOption {
  id: string;
  name: string;
  value: string;
  selected: boolean;
}

export interface SizeOption {
  id: string;
  name: string;
  selected: boolean;
}

export interface ContactInfo {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}