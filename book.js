const BOOK_CODE_REGEX = /^[A-Z]{3}\d{3}$/;

function calculateFine(daysLate) {
    if (!Number.isInteger(daysLate)) {
        throw new TypeError('daysLate debe ser un entero');
    }

    if (daysLate < 0) {
        throw new RangeError('daysLate no puede ser negativo');
    }

    return Number((daysLate * 0.5).toFixed(2));
}

function isValidBookCode(code) {
    if (typeof code !== 'string' || code.trim() === '') {
        return false;
    }

    return BOOK_CODE_REGEX.test(code.trim());
}

export { calculateFine, isValidBookCode };

//Egas Steven