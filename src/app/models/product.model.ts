// src/app/models/product.model.ts
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category?: string;  // Made optional with ?
  manufacturer?: string;  // Made optional with ?
  availability: string[];
  features: string[];
  imageUrl?: string;
}