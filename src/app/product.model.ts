export interface Product {
  name: string;
  price: number;
  image: string;
  // Lo hacemos opcional
  category?: string;
}
