// File: backend/src/middleware/AuthMiddleware.ts
export class AuthMiddleware {
  verify = (req: any, res: any, next: any) => {
    next();
  };
}
