import axios from "axios";
import CurrencyGateway from "./CurrencyGateway";
import InvoiceService from "./InvoiceService";
import PurchaseRepository from "./PurchaseRepository";

export default class InvoiceServiceImpl implements InvoiceService {

    constructor(readonly purchaseRepository: PurchaseRepository, readonly currencyGateway: CurrencyGateway){}

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