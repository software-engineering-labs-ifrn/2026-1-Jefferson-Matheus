import { MovimentacaoStrategy } from "./movimentacaoStrategy";

class SaqueStrategy implements MovimentacaoStrategy <any> { 
    
    executar(conta: any, valor: number, descricao: String, dataMovimentacao: Date) {
        const novoSaldo = conta.getSaldo() - valor;
        conta.setSaldo(novoSaldo);
    }
    
}

export { SaqueStrategy };