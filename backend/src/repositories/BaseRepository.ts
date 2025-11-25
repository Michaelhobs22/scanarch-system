// File: backend/src/repositories/BaseRepository.ts
export abstract class BaseRepository<T> {
  async findById(id: string): Promise<T | null> {
    return null;
  }
  
  async findAll(): Promise<T[]> {
    return [];
  }
  
  async create(data: any): Promise<T> {
    return {} as T;
  }
  
  async update(id: string, data: any): Promise<T | null> {
    return null;
  }
  
  async delete(id: string): Promise<boolean> {
    return true;
  }
}
