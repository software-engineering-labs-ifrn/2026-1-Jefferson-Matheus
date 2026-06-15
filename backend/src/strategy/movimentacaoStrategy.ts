interface MovimentacaoStrategy <T> {
    executar(conta: T, valor: number, descricao: String, dataMovimentacao: Date)
}

export type {MovimentacaoStrategy};