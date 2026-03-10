# 🛒 Projeto Kitanda

Aplicação web desenvolvida com Vue.js que simula o catálogo de produtos de uma quitanda/mercearia.  
O usuário pode visualizar produtos, filtrar por categoria e adicionar itens ao carrinho.

Este projeto foi desenvolvido com foco em praticar arquitetura de aplicações frontend utilizando Vue 3, gerenciamento de estado com Pinia e consumo de dados simulados.

---

## 🚀 Tecnologias utilizadas

- Vue 3
- Pinia
- Axios
- Vue Router
- Vite
- Vuetify
- JSON (mock de dados)

---

## 📦 Funcionalidades

- Listagem de produtos
- Filtro de produtos por categoria
- Sistema de carrinho de compras
- Cálculo automático do valor total do carrinho
- Interface responsiva
- Consumo de dados via requisição HTTP

---

## 🗂️ Estrutura do projeto

- src
- components → Componentes reutilizáveis (Navbar, Footer)
- views → Páginas da aplicação
- stores → Gerenciamento de estado com Pinia
- services → Configuração do Axios
- assets → Imagens e recursos estáticos


---

## 🔄 Fluxo da aplicação

1. A aplicação faz uma requisição HTTP utilizando **Axios**
2. Os dados são armazenados na **store do Pinia**
3. Os componentes consomem os dados da store
4. O usuário pode filtrar produtos por categoria
5. Produtos podem ser adicionados ao carrinho
6. O carrinho calcula automaticamente o total da compra

---

## 📡 Fonte de dados

Os dados da aplicação são simulados através de um arquivo JSON (`db.json`) que representa um backend simples para fins de estudo.

---

## SCREENSHOT DO PROJETO
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/173497bb-1760-4160-b025-c7af295966b0" />
<img width="1915" height="1075" alt="image" src="https://github.com/user-attachments/assets/14e54110-c1c6-4192-8fe6-291c6b2be715" />
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/01405171-6bc4-4d78-8ba1-0cf63832148f" />

## PROJETO NO AR

https://projeto-kitanda.vercel.app/


## ▶️ Como executar o projeto

### Clonar o repositório

## BASH
git clone https://github.com/seu-usuario/projeto-kitanda.git

## ENTRAR NA PASTA

cd projeto-kitanda

## INSTALAR DEPENDENCIAS

npm install

## RODAR O PROJETO

npm run dev

## A Aplicação estará disponivel em:

http://localhost:5173


📚 Objetivo do projeto

Este projeto foi desenvolvido com o objetivo de:

Praticar Vue 3

Trabalhar com gerenciamento de estado utilizando Pinia

Organizar projetos frontend com boas práticas de arquitetura

Simular o consumo de uma API REST

📌 Melhorias futuras

Sistema de busca de produtos

Persistência do carrinho no LocalStorage

Integração com backend real

Página de checkout

👨‍💻 Autor

Desenvolvido por Tales Porjan

Desenvolvedor Front-end apaixonado por tecnologia e aprendizado contínuo.
