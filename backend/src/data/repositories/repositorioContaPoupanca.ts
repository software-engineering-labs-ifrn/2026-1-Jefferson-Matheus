import { ContaPoupanca } from "../../models/contaPoupanca";
import { RepositorioBase } from "./repositorioBase";

class RepositorioContaPoupanca implements RepositorioBase<ContaPoupanca> {
    salvar(entidade: ContaPoupanca): void {
        throw new Error("Method not implemented.");
    }
    listarTodos(): ContaPoupanca[] {
        throw new Error("Method not implemented.");
    }
    encontrarPorId(id: number): ContaPoupanca {
        throw new Error("Method not implemented.");
    }
    deletar(id: number): void {
        throw new Error("Method not implemented.");
    }

}

export {RepositorioContaPoupanca};