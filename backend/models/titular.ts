import { ContaAbstrata } from "./contaAbstrata";
import { Usuario } from "./usuario";

class Titular {
    private Id: number;
    private Nome: string;
    private SobreNome: string;
    private Cpf: string;
    private Usuario: Usuario;
    private Contas: ContaAbstrata[];

    public constructor(
        id: number,
        nome: string,
        sobreNome: string,
        cpf: string,
        usuario: Usuario,
        contas: ContaAbstrata[] = []
    ) {
        this.Id = id;
        this.Nome = nome;
        this.SobreNome = sobreNome;
        this.Cpf = cpf;
        this.Usuario = usuario;
        this.Contas = contas;
    }

    public getId() { return this.Id; }
    public setId(id: number) { this.Id = id; }

    public getNome() { return this.Nome; }
    public setNome(nome: string) { this.Nome = nome; }

    public getSobreNome() { return this.SobreNome; }
    public setSobreNome(sobreNome: string) { this.SobreNome = sobreNome; }

    public getCpf() { return this.Cpf; }
    public setCpf(cpf: string) { this.Cpf = cpf; }

    public getUsuario() { return this.Usuario; }
    public setUsuario(usuario: Usuario) { this.Usuario = usuario; }

    public getContas() { return this.Contas; }
    public setContas(contas: ContaAbstrata[]) { this.Contas = contas; }

    public addConta(conta: ContaAbstrata) { this.Contas.push(conta); }
}
export { Titular };
