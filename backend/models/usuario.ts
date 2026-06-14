class Usuario {
    private Id: number;
    private Login: string;
    private Senha: string;
    private SenhaAutorizacao: string;

    public constructor(id: number, login: string, senha: string, senhaAutorizacao: string) {
        this.Id = id;
        this.Login = login;
        this.Senha = senha;
        this.SenhaAutorizacao = senhaAutorizacao;
    }

    public getId() { return this.Id; }
    public setId(id: number) { this.Id = id; }

    public getLogin() { return this.Login; }
    public setLogin(login: string) { this.Login = login; }

    public getSenha() { return this.Senha; }
    public setSenha(senha: string) { this.Senha = senha; }

    public getSenhaAutorizacao() { return this.SenhaAutorizacao; }
    public setSenhaAutorizacao(senhaAutorizacao: string) { this.SenhaAutorizacao = senhaAutorizacao; }
}
export { Usuario };
