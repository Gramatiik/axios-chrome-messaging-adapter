export function isArrayBuffer(data: any): data is ArrayBuffer {
  return (
    data !== undefined && data !== null && data.constructor === ArrayBuffer
  );
}

export function isArrayBufferDataUrl(data: string): boolean {
  return (data || '').trim().startsWith('data:encoded-array-buffer;base64,');
}

export function arrayBufferToDataURL(buffer: ArrayBuffer): string {
  return `data:encoded-array-buffer;base64,${arrayBufferToBase64(buffer)}`;
}

export function dataURLToArrayBuffer(data: string): ArrayBuffer {
  return base64ToArrayBuffer(data.substring(data.indexOf(',') + 1));
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  let binary = '';

  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  return window.btoa(binary);
}

function base64ToArrayBuffer(base64: string): ArrayBuffer {
  const binary_string = window.atob(base64);
  const len = binary_string.length;
  const bytes = new Uint8Array(len);

  for (let i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}
