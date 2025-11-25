// File: frontend-web/src/services/apiClient.ts
export class ApiClient {
  async get(path: string) {
    return { success: false };
  }
  
  async post(path: string, data: any) {
    return { success: false };
  }
}
export const apiClient = new ApiClient();
