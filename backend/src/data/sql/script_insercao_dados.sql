/*
SCRIPT: script_insercao_dados
OBJETIVO: Inserir dados de teste nas tabelas do retro_bank
SGBD: MySQL 8.x
AUTOR: Jefferson Matheus Ferreira de Lima
*/

USE retro_bank;


INSERT INTO TB_USUARIOS (LOGIN, SENHA, SENHA_AUTH) VALUES 
('jefferson.lima', 'senhaHash123', 'auth9876'),
('maria.silva', 'maria@2026', 'auth5432'),
('lucas.santos', 'lucasPass!', 'auth1111');


INSERT INTO TB_TITULARES (NOME, SOBRE_NOME, CPF, ID_USUARIO) VALUES 
('Jefferson', 'Lima', '123.456.789-00', 1),
('Maria', 'Silva', '987.654.321-11', 2),
('Lucas', 'Santos', '456.789.123-22', 3);


INSERT INTO TB_CONTAS (NU_CONTA, NU_AGENCIA, SALDO, TIPO_CONTA, ID_TITULAR) VALUES 
(100123, 0001, 1500.50, 'CORRENTE', 1),  
(100124, 0001, 50000.00, 'POUPANÇA', 1),
(200456, 0001, 250.00, 'CORRENTE', 2),   
(300789, 0002, 10.00, 'CORRENTE', 3);    


INSERT INTO TB_MOVIMENTACOES (TIPO_MOVIMENTACAO, VALOR, DESCRICAO, ID_CONTA) VALUES 
('DEPOSITO', 1000.00, 'Depósito Inicial em Dinheiro', 1),
('PIX', 250.00, 'Pix recebido de um amigo', 1),
('SAQUE', 100.00, 'Saque no caixa eletrônico', 1),


('DEPOSITO', 50000.00, 'Transferência de aplicação antiga', 2),


('BOLETO', 150.00, 'Pagamento da conta de energia', 3),
('CARTAO DE CREDITO', 450.00, 'Fatura do cartão de crédito', 3);