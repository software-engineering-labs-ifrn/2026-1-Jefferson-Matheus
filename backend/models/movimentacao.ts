import { ContaAbstrata } from "./contaAbstrata";

class Movimentacao {
    private Id: number;
    private Tipo: string;
    private Valor: number;
    private Desc: string;
    private Data: Date;
    private Conta: ContaAbstrata;

    public constructor(
        id: number,
        tipo: string,
        valor: number,
        desc: string,
        data: Date,
        conta: ContaAbstrata
    ) {
        this.Id = id;
        this.Tipo = tipo;
        this.Valor = valor;
        this.Desc = desc;
        this.Data = data;
        this.Conta = conta;
    }

    public getId() { return this.Id; }
    public setId(id: number) { this.Id = id; }

    public getTipo() { return this.Tipo; }
    public setTipo(tipo: string) { this.Tipo = tipo; }

    public getValor() { return this.Valor; }
    public setValor(valor: number) { this.Valor = valor; }

    public getDesc() { return this.Desc; }
    public setDesc(desc: string) { this.Desc = desc; }

    public getData() { return this.Data; }
    public setData(data: Date) { this.Data = data; }

    public getConta() { return this.Conta; }
    public setConta(conta: ContaAbstrata) { this.Conta = conta; }
}

export { Movimentacao };
