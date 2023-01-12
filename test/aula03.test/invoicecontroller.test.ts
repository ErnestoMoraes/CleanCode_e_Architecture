import axios from "axios";
import { response } from "express";

test.skip('Deve testar a API de Invoice', async function() {
    const response = await axios.get('http://localhost:3000/cards/123412341234/invoices');
    const invoice = response.data;
    expect(invoice.total).toBe(690);
});