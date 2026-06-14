import { ContaAbstrata } from "./contaAbstrata";

class ContaCorrente extends ContaAbstrata {
    private LimiteChequeEspecial: number

    public constructor(id: number, nuConta: number, nuAgencia: number, saldo: number, limiteChequeEspecial: number) {
        super(id, nuConta, nuAgencia, saldo);
        this.LimiteChequeEspecial = limiteChequeEspecial;
    }

    public getLimiteChequeEspecial() { return this.LimiteChequeEspecial }
    public setLimiteChequeEspecial(limiteChequeEspecial: number) { this.LimiteChequeEspecial = limiteChequeEspecial }
}

export { ContaCorrente };
