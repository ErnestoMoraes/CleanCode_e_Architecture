export default interface InvoiceService {
    calculate(card_number: string, month: number, year: number): Promise<number>;
}