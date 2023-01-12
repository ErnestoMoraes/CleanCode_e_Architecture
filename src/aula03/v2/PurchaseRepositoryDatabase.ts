import Purchase from "./Purchase";
import PurchaseRepository from "./PurchaseRepository";
import pgp from "pg-promise";

// driven (outbound)
// access ao banco de dados
export default class PurchaseRepositoryDatabase implements PurchaseRepository {
    async getPurchases(card_number: string, month: number, year: number): Promise<Purchase[]> {
        const connection = pgp()('postgres://postgres:123456@localhost:5432/app');
        const purchasesData = await connection.query('select * from ernesto.purchase where card_number = $1 and extract(month from date)::integer = $2 and extract(year from date)::integer = $3', [card_number, month, year]);
        const purchases = [];
        for (const purchaseData of purchasesData) {
            purchases.push(new Purchase(purchaseData.card_number, parseFloat(purchaseData.amount), purchaseData.currency));
        }
        return purchases;
    }
}