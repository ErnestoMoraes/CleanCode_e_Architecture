import express from "express";
import pgp from "pg-promise";
import axios from "axios";
const app = express();
app.get('/cards/:cardNumber/invoices', async function(req, res) {
    const connection = pgp()('postgres://postgres:123456@localhost:5432/app');
    const purchases = await connection.query('select * from ernesto.purchase', []);
    const response = await axios.get('http://localhost:3000/currencies');
    const currency = response.data;
    let total = 0;
    for (const purchase of purchases) {
        if (purchase.currency === 'USD') {
            total += parseFloat(purchase.amount) * currency.amount;
        } else {

        }
    }
    res.json({
        total
    });
});
app.listen(3001);