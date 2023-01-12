import express from "express";
import { CurrencyGatewayHttp } from "./CurrencyGatewayHttp";
import InvoiceServiceImpl from "./InvoiceServiceImpl";
import PurchaseRepositoryDatabase from "./PurchaseRepositoryDatabase";
const app = express();

//driver (inbound)
app.get('/cards/:cardNumber/invoices', async function(req, res) {
    const purchaseRepository = new PurchaseRepositoryDatabase();
    const currencyGateway = new CurrencyGatewayHttp();
    const invoiceService = new InvoiceServiceImpl();
    const total = await invoiceService.calculate(req.params.cardNumber, 9, 2023);
    res.json({
        total
    });
});
app.listen(3001);