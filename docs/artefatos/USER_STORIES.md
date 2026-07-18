# User Stories — crudEmployee

Product Backlog inicial do sistema de gerenciamento de funcionários.

---

### US01 - Listar Funcionários

- **Como** Administrador
- **Eu quero** visualizar a lista de todos os funcionários cadastrados
- **Para que eu possa** consultar rapidamente os registros existentes no sistema

**Critérios de Aceitação:**
- **Dado que** existem funcionários cadastrados no sistema
- **Quando** eu solicitar a listagem de funcionários
- **Então** o sistema deve retornar uma lista contendo todos os registros com id, nome e resumo profissional

---

### US02 - Cadastrar Funcionário

- **Como** Administrador
- **Eu quero** cadastrar um novo funcionário informando nome, salário e resumo profissional
- **Para que eu possa** incluir novos colaboradores na base de dados do sistema

**Critérios de Aceitação:**
- **Dado que** eu possuo os dados de um novo funcionário (nome, salário e resumo)
- **Quando** eu enviar esses dados para o sistema
- **Então** o funcionário deve ser persistido no banco de dados e o sistema deve confirmar a operação

---

### US03 - Remover Funcionário

- **Como** Administrador
- **Eu quero** remover um funcionário existente pelo seu identificador
- **Para que eu possa** excluir registros de colaboradores que não fazem mais parte da organização

**Critérios de Aceitação:**
- **Dado que** existe um funcionário cadastrado com o id informado
- **Quando** eu solicitar a remoção deste funcionário
- **Então** o sistema deve excluir o registro correspondente e confirmar a operação
- **E** se o id informado não existir, o sistema deve retornar uma mensagem de erro

---

### US04 - Atualizar Nome do Funcionário

- **Como** Administrador
- **Eu quero** alterar o nome de um funcionário específico
- **Para que eu possa** corrigir ou atualizar o nome de um colaborador na base de dados

**Critérios de Aceitação:**
- **Dado que** existe um funcionário cadastrado com o id informado
- **Quando** eu enviar um novo nome para este funcionário
- **Então** o sistema deve atualizar apenas o campo nome e confirmar a operação

---

### US05 - Atualizar Resumo do Funcionário

- **Como** Administrador
- **Eu quero** alterar o resumo profissional de um funcionário específico
- **Para que eu possa** manter as informações de qualificação dos colaboradores atualizadas

**Critérios de Aceitação:**
- **Dado que** existe um funcionário cadastrado com o id informado
- **Quando** eu enviar um novo resumo profissional para este funcionário
- **Então** o sistema deve atualizar apenas o campo resumo e confirmar a operação

---

### US06 - Atualizar Salário do Funcionário

- **Como** Administrador
- **Eu quero** alterar o salário de um funcionário específico
- **Para que eu possa** ajustar a remuneração dos colaboradores conforme necessário

**Critérios de Aceitação:**
- **Dado que** existe um funcionário cadastrado com o id informado
- **Quando** eu enviar um novo valor de salário para este funcionário
- **Então** o sistema deve atualizar apenas o campo salário e confirmar a operação
