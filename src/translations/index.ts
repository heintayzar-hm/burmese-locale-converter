import { dayTranslations, dayTranslationsInNumber, monthTranslations, monthTranslationsInNumber, numberTranslationsInNumber, numberTranslationsInText } from "./translations";


const translateNumbers = (number: string | number, format = "text" as "text" | "number"): string => {
    if (format === "number") {
        // we should return a number 1 -> ၁
        let numberString = number.toString();
        let result = "";
        for (let i = 0; i < numberString.length; i++) {
            if (numberString[i] === ".") {
                result += ".";
                continue;
            }
            result += numberTranslationsInNumber[parseInt(numberString[i])];
        }
        return result;
    }

    if (format === "text") {
        // we should return a number 1 -> တစ်
        let numberInt = parseInt(number.toString());
        const isNegative = numberInt < 0;
        number = Math.abs(numberInt);

        if (number === 0) {
            return numberTranslationsInText[0] || '';
        }

        const units = number % 10;
        const tens = Math.floor((number % 100) / 10);
        const hundreds = Math.floor((number % 1000) / 100);
        const thousands = Math.floor(number / 1000);

        const thousandsText = thousands > 0 ? `${numberTranslationsInText[thousands]}ထောင် ` : '';
        const hundredsText = hundreds > 0 ? `${numberTranslationsInText[hundreds]}ရာ ` : '';
        const tensText = tens > 0 ? `${numberTranslationsInText[tens]}ဆယ် ` : '';
        const unitsText = units > 0 ? numberTranslationsInText[units] : '';


        const negativeSign = isNegative ? '-' : '';

        return `${negativeSign}${thousandsText}${hundredsText}${tensText}${unitsText}`;

    }

    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const translateMonth = (month: string | number): string => {
    if (typeof month === 'number') {
        return monthTranslationsInNumber[month];
    }
    return monthTranslations[month.toString()];
}


const translateDay = (day: string | number): string => {
    if (typeof day === 'number') {
        return dayTranslationsInNumber[day];
    }
    return dayTranslations[day.toString()];
}


const translateDate = (date: Date, {
    includeDate = true,
    includeDay = false,
    includeMonth = true,
    includeYear = true,
    includeYearInText = false,
    includeHours = false,
    includeMinutes = false,
    includeSeconds = false,
}: {
    includeDate?: boolean,
    includeDay?: boolean,
    includeMonth?: boolean,
    includeYear?: boolean,
    includeYearInText?: boolean,
    includeHours?: boolean,
    includeMinutes?: boolean,
    includeSeconds?: boolean,
    } = {}
): string => {
    let result = '';
    if (includeDate) { // number 1 -> ၁
        result += translateDay(date.getDate()) + ' ';
    }
    if (includeDay) { // text 1 ->
        result += translateNumbers(date.getDay(), 'number') + ' ';
    }
    if (includeMonth) {
        result += translateMonth(date.getMonth()) + ' ';
    }
    if (includeYear) {
        result += translateNumbers(date.getFullYear(), 'number') + ' ';
    }
    if (includeYearInText) {
        result += translateNumbers(date.getFullYear(), 'text') + ' ';
    }
    if (includeHours) {
        result += translateNumbers(date.getHours(), 'text') + ' ';
    }
    if (includeMinutes) {
        result += translateNumbers(date.getMinutes(), 'text') + ' ';
    }
    if (includeSeconds) {
        result += translateNumbers(date.getSeconds(), 'text') + ' ';
    }
    return result.trim();
}


export { translateNumbers, translateMonth, translateDay , translateDate};
