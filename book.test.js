import { calculateFine, isValidBookCode } from './book.js';

describe('calculateFine()', () => {
    test('calculo correcto para 5 dias', () => {
        expect(calculateFine(5)).toBe(2.5);
    });

    test('cero dias debe retornar 0', () => {
        expect(calculateFine(0)).toBe(0);
    });

    test('numero negativo debe lanzar error-', () => {
        expect(() => calculateFine(-1)).toThrow(RangeError);
    });
});

describe('isValidBookCode()', () => {
    test('codigo valido', () => {
        expect(isValidBookCode('EGA101')).toBe(true);
    });

    test('codigo invalido', () => {
        expect(isValidBookCode('EG101')).toBe(false);
    });

    test('codigo vacio', () => {
        expect(isValidBookCode('')).toBe(false);
    });
});
//Steven Egas



