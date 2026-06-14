import { Movimentacao } from "./movimentacao";

abstract class ContaAbstrata {
    protected Id: number
    protected Nuconta: number
    protected Nuagencia: number
    protected Saldo: number
    protected Movimentacoes: Movimentacao[];

    public constructor(id: number, nuConta: number, nuAgencia: number, saldo: number) {
        this.Id = id;
        this.Nuconta = nuConta;
        this.Nuagencia = nuAgencia;
        this.Saldo = saldo;
        this.Movimentacoes = [];

    }

    public getId() { return this.Id }
    public setId(id: number) { this.Id = id }
    public getNuConta() { return this.Nuconta }
    public setNuConta(nuConta: number) { this.Nuconta = nuConta }
    public getNuAgencia() { return this.Nuagencia }
    public setNuAgencia(nuAgencia: number) { this.Nuagencia = nuAgencia }
    public getSaldo() { return this.Saldo }
    public setSaldo(saldo: number) { this.Saldo = saldo }
}

export { ContaAbstrata };