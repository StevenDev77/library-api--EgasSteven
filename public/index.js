import express from 'express';
import { calculateFine, isValidBookCode } from '../book.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
    res.json({
        mensaje: 'Biblioteca Digital ESPE',
        estudiante: 'Steven Egas',
        nrc: 'XXXXXXXX',
        correo: 'steven.egas@espe.edu.ec'
    });
});

app.get('/book/:code', (req, res) => {
    const { code } = req.params;

    if (!isValidBookCode(code)) {
        return res.status(400).json({ error: 'Formato de codigo invalido. Debe ser AAA999.' });
    }

    return res.json({
        code,
        title: `Libro ${code}`,
        available: true
    });
});

app.get('/fine', (req, res) => {
    const { daysLate } = req.query;
    const parsedDaysLate = Number(daysLate);

    if (daysLate === undefined || !Number.isInteger(parsedDaysLate)) {
        return res.status(400).json({ error: 'daysLate debe ser un entero.' });
    }

    try {
        const fine = calculateFine(parsedDaysLate);

        return res.json({
            daysLate: parsedDaysLate,
            fine
        });
    } catch (error) {
        if (error instanceof RangeError || error instanceof TypeError) {
            return res.status(400).json({ error: error.message });
        }
        return res.status(500).json({ error: 'Error interno del servidor.' });
    }
});

if (process.env.NODE_ENV !== 'test' && process.env.VERCEL !== '1') {
    app.listen(PORT, () => {
        console.log(`Servidor ejecutandose en el puerto ${PORT}`);
    });
}

export default app;