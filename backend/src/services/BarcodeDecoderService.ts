// File: backend/src/services/BarcodeDecoderService.ts
export class BarcodeDecoderService {
  detectFormat(rawData: string): string {
    return 'UNKNOWN';
  }
  
  decode(rawData: string) {
    return { rawValue: rawData, format: 'UNKNOWN', isValid: false };
  }
}
