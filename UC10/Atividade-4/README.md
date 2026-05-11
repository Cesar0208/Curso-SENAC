# Relatório de Testes Unitários — [Nome do Grupo]

## Sobre o Projeto

Breve descrição do que é o Projeto Integrador e por que os testes foram implementados.

## O que está sendo testado?

- **Módulo de Autenticação (`auth.js`)**: validação de e-mail, login com sucesso, login com falha
- **Módulo de Cálculo de Frete (`shipping.js`)**: cálculo por região de CEP, frete grátis, CEP inválido
- **Módulo de Carrinho (`cart.js`)**: adicionar item, remover item, calcular total

## O que NÃO está sendo testado?

- **Integração com Banco de Dados**: os testes usam dados mockados (hardcoded), sem conexão real
- **Interface Gráfica (UI)**: apenas a lógica JavaScript é testada, sem renderização de componentes
- **Chamadas de API Externas**: respostas simuladas para evitar dependência de rede

## Como rodar os testes

Instalar dependências:
    npm install

Rodar todos os testes:
    npm test

Rodar com detalhes:
    npm run test:verbose

Ver cobertura de código:
    npm run test:coverage

## Padrão utilizado: AAA (Arrange, Act, Assert)

Cada teste segue o padrão:
1. **Arrange**: preparar os dados e o ambiente de teste
2. **Act**: executar a função sendo testada
3. **Assert**: verificar se o resultado é o esperado

## Resultados esperados

Todos os 9 testes devem passar (3 por módulo), com 0 falhas.
