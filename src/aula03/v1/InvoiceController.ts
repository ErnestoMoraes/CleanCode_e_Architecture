import express from "express";
import pgp from "pg-promise";
import axios from "axios";
const app = express();
// driver (inbound)
app.get('/cards/:cardNumber/invoices', async function(req, res) {
    const date = new Date()
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    // driven (outbound)
    const connection = pgp()('postgres://postgres:123456@localhost:5432/app');
    const purchases = await connection.query('select * from ernesto.purchase where card_number = $1 and extract(month from date)::integer = $2 and extract(year from date)::integer = $3', [req.params.cardNumber, month, year]);
    const response = await axios.get('http://localhost:3000/currencies');
    const currency = response.data;
    // application
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