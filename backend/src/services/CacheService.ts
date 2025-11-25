// File: backend/src/services/CacheService.ts
export class CacheService {
  async set(key: string, value: any): Promise<boolean> {
    return true;
  }
  
  async get<T>(key: string): Promise<T | null> {
    return null;
  }
  
  async delete(key: string): Promise<boolean> {
    return true;
  }
}
