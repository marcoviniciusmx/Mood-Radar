<h1 align="center">Mood Radar</h1>

<p align="center">
  Aplicação desenvolvida em React para analisar o clima atual de um ambiente com base em sinais simples de contexto, como barulho, quantidade de pessoas, pressa e humor, retornando um diagnóstico e uma sugestão prática.
</p>

<p align="center">
  <a href="#-about-the-project">Sobre o projeto</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-features">Funcionalidades</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-technologies">Tecnologias</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-project-structure">Estrutura</a>
</p>

---

## 🏠 About the project

O **Mood Radar** foi desenvolvido como uma aplicação front-end em React para interpretar o “clima” de um ambiente a partir de quatro parâmetros escolhidos pelo usuário: **barulho**, **pessoas**, **pressa** e **humor**.

A proposta da aplicação é transformar esses sinais em uma leitura simples e útil do contexto atual, retornando um diagnóstico como **Leve e produtivo**, **Foco total**, **Sob pressão**, **Agitado**, **Colaborativo**, **Neutro** ou **Crítico**, além de uma descrição e uma dica prática.

Durante o desenvolvimento, foram praticados conceitos importantes como uso de `useState`, atualização dinâmica de conteúdo, regras condicionais em React e estilização com `styled-components`.

---

## 🧰 Features

- Seleção de nível de barulho
- Seleção de quantidade de pessoas
- Seleção de nível de pressa
- Seleção de humor do ambiente
- Destaque visual da opção selecionada
- Botão para analisar o clima atual
- Diagnóstico dinâmico do ambiente
- Descrição contextual baseada no resultado
- Sugestão prática baseada no diagnóstico
- Botão para resetar o formulário
- Interface construída com React
- Estilização com Styled Components

---

## 💻 Technologies

Este projeto foi desenvolvido com as seguintes tecnologias:

- React
- Vite
- JavaScript
- Styled Components
- HTML5
- CSS-in-JS
- ESLint

---

## 👷 Project structure

A estrutura principal do projeto está organizada da seguinte forma:

```bash id="k4u2dr"
mood-radar/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── pages/
│   │   └── Home/
│   │       ├── index.jsx
│   │       └── styles.js
│   ├── styles/
│   │   └── GlobalStyles.js
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
