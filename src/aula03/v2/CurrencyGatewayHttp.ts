import axios from "axios";
import CurrencyGateway from "./CurrencyGateway";

//access a API
export class CurrencyGatewayHttp implements CurrencyGateway {
    async getCurrency(): Promise<number> {
        const response = await axios.get('http://localhost:3000/currencies');    
        const currency = response.data;
        return currency.amount;
    }
    
}