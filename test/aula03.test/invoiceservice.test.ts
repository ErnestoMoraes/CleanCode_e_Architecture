import sinon from "sinon";
import { CurrencyGatewayHttp } from "../../src/aula03/v2/CurrencyGatewayHttp";
import PurchaseRepositoryDatabase from "../../src/aula03/v2/PurchaseRepositoryDatabase";
import Purchase from "../../src/aula03/v2/Purchase";
import InvoiceServiceImpl from "../../src/aula03/v2/InvoiceServiceImpl";
import axios from "axios";

test.skip('Deve testar o calculo da fatura usando STUB', async function(){
    const currencyGatewayHttpStub = sinon.stub(CurrencyGatewayHttp.prototype, 'getCurrency').returns(Promise.resolve(3));
    const purchaseRepositoryDatabaseSub = sinon.stub(PurchaseRepositoryDatabase.prototype, 'getPurchases').returns(Promise.resolve([new Purchase('123412341324', 100, 'USD')])); 
    const invoiceService = new InvoiceServiceImpl();
    const total = await invoiceService.calculate('123412341234', 9, 2023);
    expect(total).toBe(300);
    currencyGatewayHttpStub.restore();
    purchaseRepositoryDatabaseSub.restore();
    sinon.restore();
});

test.skip('Deve testar o calculo da fatura usando SPY', async function(){
    const spy = sinon.spy(PurchaseRepositoryDatabase.prototype, 'getPurchases');
    const invoiceService = new InvoiceServiceImpl();
    const total = await invoiceService.calculate('123412341234', 9, 2023);
    expect(total).toBe(690);
    expect(spy.calledWith('123412341324', 9, 2023)).toBe(true);
    sinon.restore();
});

test.skip('Deve testar o calculo da fatura usando Mock', async function(){
    const axiosMock = sinon.mock(axios);
    axiosMock
        .expects('get')
        .withArgs('http://localhost:3000/currencies')
        .resolves({data: { amount: 3 }});
    const invoiceService = new InvoiceServiceImpl();
    const total = await invoiceService.calculate('123412341234', 9, 2023);
    expect(total).toBe(690);
    axiosMock.verify();
    sinon.restore();
});