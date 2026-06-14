import { ContaCorrente } from "../../models/contaCorrente";
import { RepositorioBase } from "./repositorioBase";

class RepositorioContaConrrente implements RepositorioBase<ContaCorrente> {
    salvar(entidade: ContaCorrente): void {
        throw new Error("Method not implemented.");
    }
    listarTodos(): ContaCorrente[] {
        throw new Error("Method not implemented.");
    }
    encontrarPorId(id: number): ContaCorrente {
        throw new Error("Method not implemented.");
    }
    deletar(id: number): void {
        throw new Error("Method not implemented.");
    }

}