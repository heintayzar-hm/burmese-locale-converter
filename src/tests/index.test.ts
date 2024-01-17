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

    it('should translate numbers to text format for large numbers', () => {
      expect(translateNumbers(3456423, 'text')).toEqual('သုံးသန်း လေးသိန်း ငါးသောင်း ခြောက်ထောင် လေးရာ နှစ်ဆယ် သုံး');
    });

    it('should translate numbers to text format for large numbers', () => {
      expect(translateNumbers(3456023, 'text')).toEqual('သုံးသန်း လေးသိန်း ငါးသောင်း ခြောက်ထောင် နှစ်ဆယ် သုံး');
    });

    it('should translate numbers to text format for large numbers', () => {
      expect(translateNumbers(123456423, 'text')).toEqual('တစ်ရာ နှစ်ဆယ် သုံးသန်း လေးသိန်း ငါးသောင်း ခြောက်ထောင် လေးရာ နှစ်ဆယ် သုံး');
    });

    it('should translate numbers to number format', () => {
      expect(translateNumbers(123, 'number')).toEqual('၁၂၃');
    });

    it('should translate numbers to number format in number', () => {
      expect(translateNumbers("123, 456", 'number')).toEqual('၁၂၃, ၄၅၆');
    });

    it('should translate numbers to number format in number', () => {
      expect(translateNumbers("123,456,789", 'number')).toEqual('၁၂၃,၄၅၆,၇၈၉');
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
        expect(translateDate(date)).toEqual('ဗုဒ္ဓဟူး ဇန်နဝါရီ ၂၀၂၀');
    });

  it('should translate date for monday greater than 7', () => {
    const date = new Date('2024-01-08');
    expect(translateDate(date)).toEqual('တနင်္လာ ဇန်နဝါရီ ၂၀၂၄');
  });
});
