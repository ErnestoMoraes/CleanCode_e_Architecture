
import InvoiceService from "./InvoiceService";
import { CurrencyGatewayHttp } from "./CurrencyGatewayHttp";
import PurchaseRepositoryDatabase from "./PurchaseRepositoryDatabase";

export default class InvoiceServiceImpl implements InvoiceService {
    purchaseRepository: PurchaseRepositoryDatabase;
    currencyGateway: CurrencyGatewayHttp;

    constructor(){
        this.purchaseRepository = new PurchaseRepositoryDatabase(); 
        this.currencyGateway = new CurrencyGatewayHttp();
    }

    async calculate(card_number: string, month: number, year: number): Promise<number> {
        const purchases = await this.purchaseRepository.getPurchases(card_number, month, year);
        const currencyAmount = await this.currencyGateway.getCurrency();

        // application
        let total = 0;
        for (const purchase of purchases) {
            if (purchase.currency === 'USD') {
                total += purchase.amount * currencyAmount;
            } else {
                total += purchase.amount;
            }
        }
        return total;
    }

}