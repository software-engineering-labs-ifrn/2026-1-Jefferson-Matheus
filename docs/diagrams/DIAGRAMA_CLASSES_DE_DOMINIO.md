```plantUML
@startuml

skinparam classAttributeIconSize 0

'=========================
' Conta Abstrata
'=========================
abstract class ContaAbstrata {
    - id : int
    - nuConta : String
    - nuAgencia : String
    - saldo : Double

    + getters()
    + setters()
}

'=========================
' Conta Corrente
'=========================
class ContaCorrente {
    - limiteChequeEspecial : Double

    + getters()
    + setters()
}

'=========================
' Conta Poupança
'=========================
class ContaPoupanca {
    - taxRenda : Double

    + getters()
    + setters()
}

'=========================
' Titular
'=========================
class Titular {
    - id : int
    - nome : String
    - sobreNome : String
    - cpf : String

    + getters()
    + setters()
}

'=========================
' Usuario
'=========================
class Usuario {
    - id : int
    - login : String
    - senha : String
    - senhaAutorizacao : String

    + getters()
    + setters()
}

'=========================
' Movimentacao
'=========================
class Movimentacao {
    - id : int
    - tipo : String
    - valor : Double
    - desc : String
    - data : Timestamp

    + getters()
    + setters()
}

'=========================
' Herança
'=========================
ContaCorrente --|> ContaAbstrata
ContaPoupanca --|> ContaAbstrata

'=========================
' Composição
'=========================
Titular "1" *-- "1..*" ContaAbstrata
Titular "1" *-- "1" Usuario

ContaAbstrata "1" *-- "0..*" Movimentacao

@enduml
```

