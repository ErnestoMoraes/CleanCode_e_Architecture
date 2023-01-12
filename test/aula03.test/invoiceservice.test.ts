import sinon from "sinon";
import { CurrencyGatewayHttp } from "../../src/aula03/v2/CurrencyGatewayHttp";
import PurchaseRepositoryDatabase from "../../src/aula03/v2/PurchaseRepositoryDatabase";
import Purchase from "../../src/aula03/v2/Purchase";
import InvoiceServiceImpl from "../../src/aula03/v2/InvoiceServiceImpl";

test('Deve testar o calculo da fatura', async function(){
    const currencyGatewayHttpStub = sinon.stub(CurrencyGatewayHttp.prototype, 'getCurrency').returns(Promise.resolve(3));
    const purchaseRepositoryDatabaseSub = sinon.stub(PurchaseRepositoryDatabase.prototype, 'getPurchases').returns(Promise.resolve([new Purchase('123412341324', 100, 'USD')])); 
    const invoiceService = new InvoiceServiceImpl();
    const total = await invoiceService.calculate('123412341234', 9, 2023);
    expect(total).toBe(300);
    currencyGatewayHttpStub.restore();
    purchaseRepositoryDatabaseSub.restore();
});