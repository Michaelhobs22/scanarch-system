// File: backend/src/entities/Product.entity.ts
export class Product {
  id: string;
  barcode: string;
  name: string;
  description: string;
  sku: string;
  manufacturer: string;
  priceUsd: number;
  costUsd: number;
  imageUrl: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
