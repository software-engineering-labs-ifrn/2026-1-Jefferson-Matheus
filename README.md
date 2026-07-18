<div align="center">

# 🧑‍💼 crudEmployee

**API REST para gerenciamento de funcionários — CRUD completo com Spring Boot 3**

![Java](https://img.shields.io/badge/Java-21-%23ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.5.11-%236DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![Maven](https://img.shields.io/badge/Maven-3.9-%23C71A36?style=for-the-badge&logo=apachemaven&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-%234169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![H2 Database](https://img.shields.io/badge/H2-2.3-%23007FFF?style=for-the-badge&logo=h2&logoColor=white)
![JUnit](https://img.shields.io/badge/JUnit_5-25A162?style=for-the-badge&logo=junit5&logoColor=white)

</div>

---

## 📌 Pitch

O **crudEmployee** é uma API REST desenvolvida em Java com Spring Boot que oferece operações CRUD completas para cadastro e gerenciamento de funcionários. Com uma arquitetura limpa e perfis de ambiente flexíveis (H2 em memória para testes e PostgreSQL para produção), o sistema permite criar, listar, atualizar e remover registros de forma simples e eficiente, servindo como base de estudos para fundamentos de desenvolvimento back-end com Spring.

---

## 🧠 Contexto e Problema

Em muitas organizações, o controle manual de dados de funcionários ainda é feito com planilhas ou sistemas legados de difícil manutenção. A ausência de uma interface programática (API) para gerenciar essas informações dificulta a integração com outros sistemas, torna o processo propenso a erros e consome tempo precioso da equipe de RH.

O **crudEmployee** resolve esse problema oferecendo:

- Uma **API REST padronizada** para todas as operações de cadastro
- **Persistência flexível** (H2 para testes/desenvolvimento rápido, PostgreSQL para produção)
- **Separação clara de responsabilidades** (Controller → Service → Repository → Entity)
- **Métodos de atualização granular** (PATCH por campo específico)

---

## 📋 Requisitos Gerais

O sistema deve permitir:

| ID | Requisito | Descrição |
|---|---|---|
| RF01 | **Listar funcionários** | Retornar todos os funcionários cadastrados |
| RF02 | **Cadastrar funcionário** | Criar um novo registro com nome, salário e resumo |
| RF03 | **Remover funcionário** | Excluir um funcionário pelo seu identificador |
| RF04 | **Atualizar nome** | Alterar o nome de um funcionário existente |
| RF05 | **Atualizar resumo** | Alterar o resumo profissional de um funcionário |
| RF06 | **Atualizar salário** | Alterar o salário de um funcionário |
| RF07 | **Perfil test** | Rodar com banco H2 em memória para desenvolvimento e testes |
| RF08 | **Perfil dev** | Rodar com PostgreSQL para ambiente de produção |

---

## 👥 Papéis dos Usuários

| Papel | Descrição |
|---|---|
| **Administrador** | Usuário responsável por gerenciar o cadastro de funcionários, podendo criar, listar, editar e excluir registros |
| **Analista de RH** | Usuário final que utiliza a API (via interface ou consumo direto) para manter a base de funcionários atualizada |

---

## 🛠 Stack Tecnológica

| Tecnologia | Versão | Finalidade |
|---|---|---|
| [Java](https://openjdk.org/) | 21 | Linguagem de programação principal |
| [Spring Boot](https://spring.io/projects/spring-boot) | 3.5.11 | Framework de desenvolvimento |
| [Spring Web](https://docs.spring.io/spring-boot/index.html) | *(gerenciado pelo Boot)* | Camada REST (Controllers) |
| [Spring Data JPA](https://spring.io/projects/spring-data-jpa) | *(gerenciado pelo Boot)* | Persistência e mapeamento objeto-relacional |
| [H2 Database](https://www.h2database.com/) | *(gerenciado pelo Boot)* | Banco em memória para o perfil `test` |
| [PostgreSQL](https://www.postgresql.org/) | 16 | Banco relacional para o perfil `dev` |
| [Maven](https://maven.apache.org/) | *(wrapper incluso)* | Gerenciamento de dependências e build |
| [Jakarta EE / JPA](https://jakarta.ee/specifications/persistence/) | 3.1 | Especificação de persistência |
| [JUnit 5](https://junit.org/junit5/) | *(gerenciado pelo Boot)* | Testes unitários e de integração |
| [Spring Boot Test](https://docs.spring.io/spring-boot/index.html) | *(gerenciado pelo Boot)* | Suporte a testes com contexto Spring |

---

## 🚀 Como Executar

### Pré-requisitos

- Java 21+
- Maven (ou utilize o `./mvnw` incluso)

### Perfil de Teste (H2 — padrão)

```bash
./mvnw spring-boot:run
```

A aplicação iniciará na porta `8080` com banco H2 em memória.  
Console H2 disponível em: `http://localhost:8080/h2-console`

### Perfil de Desenvolvimento (PostgreSQL)

```bash
APP_PROFILE=dev ./mvnw spring-boot:run
```

Certifique-se de ter um banco PostgreSQL rodando em `localhost:5433` com as credenciais:

| Propriedade | Valor |
|---|---|
| Database | `employee` |
| Usuário | `postgres` |
| Senha | `1234567` |

### Build e Execução com JAR

```bash
./mvnw clean package -DskipTests
java -jar target/crudEmployee-0.0.1-SNAPSHOT.jar
```

---

## 🌐 Endpoints da API

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/employees` | Lista todos os funcionários |
| `POST` | `/employees` | Cria um novo funcionário |
| `DELETE` | `/employees/{id}` | Remove um funcionário |
| `PATCH` | `/employees/{id}/name` | Atualiza o nome |
| `PATCH` | `/employees/{id}/resume` | Atualiza o resumo |
| `PATCH` | `/employees/{id}/salary` | Atualiza o salário |

### Exemplo de Payload (POST / PATCH)

```json
{
  "name": "Maria Silva",
  "salary": 5500.00,
  "resume": "Desenvolvedora Java Sênior"
}
```

---

## 👨‍💻 Equipe

| Membro | Papel | 
|---|---|
| **Jefferson Matheus** | Desenvolvedor | 


<!--
  Instruções: Substitua os placeholders acima pelos nomes reais da equipe.
  Exemplo:
  | Nome Completo | Tech Lead / Dev | @seusuario |
-->

---

## 📁 Estrutura do Projeto

```
src/
├── main/
│   ├── java/com/employee/crudEmployee/
│   │   ├── controller/   → EmployeeController.java
│   │   ├── service/      → EmployeeService.java
│   │   ├── repository/   → EnployeeRepository.java
│   │   ├── entity/       → EmployeeEntity.java
│   │   ├── dto/          → EmployeeDto.java, RequestEmployeeDto.java
│   │   └── CrudEmployeeApplication.java
│   └── resources/
│       ├── application.properties
│       ├── application-dev.properties
│       └── application-test.properties
└── test/
    └── java/com/employee/crudEmployee/
        └── CrudEmployeeApplicationTests.java
```

---

<div align="center">

**IFRN — Campus Natal Central | Análise e Desenvolvimento de Sistemas**  
**Disciplina de Análise de Projetos**  
**2026.1**

</div>
