import { ContaAbstrata } from "./contaAbstrata";

class ContaPoupanca extends ContaAbstrata {
    private TaxRendimento: number;

    public constructor(id: number, nuConta: number, nuAgencia: number, saldo: number, taxRendimento: number) {
        super(id, nuConta, nuAgencia, saldo);
        this.TaxRendimento = taxRendimento;
    }

    public getTaxRendimento() { return this.TaxRendimento }
    public setTaxRendimento(taxRendimento: number) { this.TaxRendimento = taxRendimento }
}
export { ContaPoupanca };
