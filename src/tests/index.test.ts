// translations.test.ts

import {
    translateNumbers,
    translateMonth,
    translateDay,
    translateDate,
} from '../translations';

  describe('translateNumbers', () => {
    it('should translate numbers to text format', () => {
      expect(translateNumbers(123, 'text')).toEqual('တစ်ရာ နှစ်ဆယ် သုံး');
    });

    it('should translate numbers to number format', () => {
      expect(translateNumbers(123, 'number')).toEqual('၁၂၃');
    });

    // Add more test cases for different scenarios
  });

  describe('translateMonth', () => {
    it('should translate months', () => {
      expect(translateMonth('January')).toEqual('ဇန်နဝါရီ');
      // Add more test cases for different months
    });
  });

  describe('translateDay', () => {
    it('should translate days', () => {
      expect(translateDay('Mon')).toEqual('တနင်္လာ');
      // Add more test cases for different days
    });
  });

describe('translateDate', () => {
    it('should translate date', () => {
        const date = new Date('2020-01-01');
        expect(translateDate(date)).toEqual('တနင်္လာ ဇန်နဝါရီ ၂၀၂၀');
    });
});
