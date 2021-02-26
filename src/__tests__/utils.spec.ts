import * as utils from '../utils';

describe('utils.ts', () => {
  describe('isArrayBuffer()', () => {
    it('returns false for any non ArrayBuffer value', () => {
      expect(utils.isArrayBuffer(null)).toBe(false);
      expect(utils.isArrayBuffer(undefined)).toBe(false);
      expect(utils.isArrayBuffer(false)).toBe(false);
      expect(utils.isArrayBuffer(42)).toBe(false);
      expect(utils.isArrayBuffer('Some string')).toBe(false);
    });

    it('returns true if the value is an instance of ArrayBuffer', () => {
      expect(utils.isArrayBuffer(new Uint16Array(1))).toBe(false);
      expect(utils.isArrayBuffer(new ArrayBuffer(1))).toBe(true);
    });
  });

  describe('isArrayBufferDataURL()', () => {
    it('returns false for any non array buffer data url value', () => {
      expect(utils.isArrayBufferDataUrl('Hello, world!')).toBe(false);
    });

    it('returns true if the value is an array buffer data url', () => {
      expect(
        utils.isArrayBufferDataUrl('data:encoded-array-buffer;base64,AAA=')
      ).toBe(true);
    });
  });

  describe('arrayBufferToDataURL()', () => {
    it('converts an ArrayBuffer to a data URL string', () => {
      const typedArray = new Uint8Array([1, 2, 3]);

      const result = utils.arrayBufferToDataURL(typedArray.buffer);

      expect(result).toMatch(/^data:encoded-array-buffer;base64,/);
    });
  });

  describe('dataURLToArrayBuffer', () => {
    it('should convert a data URL back to an array buffer', () => {
      // that's the output of encoding an empty array buffer of size 2
      const encodedArrayBuffer = 'data:encoded-array-buffer;base64,AAA=';

      const arrayBuffer = utils.dataURLToArrayBuffer(encodedArrayBuffer);

      expect(arrayBuffer.byteLength).toBe(2);
    });
  });
});
