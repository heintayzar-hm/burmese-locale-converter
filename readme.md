### Burmese Locale Converter
A simple TypeScript utility for translating numbers, months, and days into the Burmese language.

### Installation

```
     npm install burmese-locale-converter
```

### Usage


```

const numberText = translateNumbers(123, 'text'); // တစ်ရာ နှစ်ဆယ် သုံး
const number = translateNumbers(123, 'number') // ၁၂၃
const monthText = translateMonth('January'); // ဇန်နဝါရီ
const dayText = translateDay('Mon'); // တနင်္လာ

const originalDate = new Date(); // Current date and time
const translatedDate = translateDate(originalDate); // တနင်္လာ ဇန်နဝါရီ ၂၀၂၄
```

 TranslateNumbers

```
translateNumbers(number: string | number, format: 'text' | 'number' = 'text'): string;
```

 Translates numbers into Burmese text or number format.

translateMonth

```
translateMonth(month: string | number): string;
```
Translates English month names into Burmese.


translateDay

```
translateDay(day: string | number): string;
```
Translates English day abbreviations into Burmese.


translateDate
```
translateDate(date: Date): Date;
```
Translates the textual representation of the date components into Burmese and returns a new Date object.

Testing
This project uses Jest for testing. Run the following command to execute the tests:

```
npm test
```

### Contribution

Contribution are welcome. You can suggest new features and find bugs and make issues.


### License
This project is licensed under the MIT License - see the LICENSE file for details.
