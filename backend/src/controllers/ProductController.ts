// File: backend/src/controllers/ProductController.ts
export class ProductController {
  async createProduct(req: any, res: any): Promise<void> {
    res.json({ success: true });
  }
}
