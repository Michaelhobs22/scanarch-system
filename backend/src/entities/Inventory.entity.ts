// File: backend/src/entities/Inventory.entity.ts
export class Inventory {
  id: string;
  quantityOnHand: number;
  quantityReserved: number;
  reorderLevel: number;
  reorderQuantity: number;
  warehouseLocation: string;
  lastCountedAt: Date;
  updatedAt: Date;
  
  addStock(quantity: number): void {
    this.quantityOnHand += quantity;
  }
  
  removeStock(quantity: number): void {
    this.quantityOnHand -= quantity;
  }
}
