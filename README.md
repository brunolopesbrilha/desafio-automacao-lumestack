﻿# 🚀 Desafio de Automação com Cypress 

Este repositório contém a automação de um fluxo básico no site de demonstração **OrangeHRM** utilizando o framework **Cypress**.

> 🔗 Acesse o site: [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)

---

## 🎯 Objetivo

Automatizar o seguinte fluxo de navegação no sistema OrangeHRM:

1. Acessar o site de login
2. Efetuar login com credenciais padrão
3. Verificar acesso à dashboard
4. Navegar para a seção "My Info"
5. Abrir o dropdown de **nacionalidade**
6. Selecionar a opção **Brazilian**
7. Validar que a opção foi corretamente selecionada

---

## 🧪 Ferramentas Utilizadas

- [Cypress](https://www.cypress.io/)
- [VScode](https://code.visualstudio.com/)
- JavaScript
- HTML (DOM via DevTools para localizar elementos)

---

## 🔐 Credenciais de Acesso

Utilizamos as credenciais padrão fornecidas pelo site demo:

- **Usuário**: `Admin`
- **Senha**: `admin123`

---

## 📁 Estrutura do Teste

O teste está contido no arquivo:

```bash
cypress/e2e/select-nationality.cy.js
