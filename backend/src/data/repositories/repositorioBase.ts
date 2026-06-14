interface RepositorioBase <T> {
    salvar(entidade: T): void;
    listarTodos(): T[];
    encontrarPorId(id: number): T | null;
    deletar(id: number): void;
}

export type { RepositorioBase };