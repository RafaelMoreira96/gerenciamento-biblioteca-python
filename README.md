# API de gerenciamento de bibloteca

Este é um projeto de estudos que visa aplicar os conhecimentos abaixo:
- O uso do SQL Alchemy
- Implementação do FastAPI para requisições
- Com o SQL Alchemy, a utilização de um banco de dados simples (SQLite)
- Aprendizado com um modelo de arquitetura de software baseado no MVC
- Utilizar os conceitos de orientação à objetos

## Requisitos para rodar a aplicação

- sudo apt-get install python3.8-full
- pip install fastapi@0.100.0
- pip install pip-chill@1.0.3
- pip install uvicorn@0.22.0
- pip install sqlalchemy@2.0.19

## Requisições da API

- Adicionar um livro: `[post] localhost:8000/book/create`
- Listar livros: `[get] localhost:8000/book/list`
- Atualizar um livro: `[put] localhost:8000/book/update/{id}`
- Remover um livro: `[delete] localhost:8000/book/remove/{id}`
- Buscar info de um livro: `[get] localhost:8000/book/get/{id}`

## Corpo do JSON para criar e atualizar o livro

```json
{
  "title": "O Guardião de Nature: A Batalha Contra Zenoir",
  "genre": "Aventura",
  "author": "Rafael Moreira Simão",
  "publishing_company": "Clube dos Autores"
}
```

## Implementações futuras

A próxima idéia é desenvolver um front-end para consumir a API. Será duas versões, sendo uma para web e outra para mobile. As tecnologias utilizadas serão estas abaixo:

- Angular (front-end)
- ReactNative (mobile)

A ideia de utilizar essas duas ferramentas é que primeiro, implementar um front-end amigável para consumir essa API e utilizar uma tecnologia que não tenho contato: o React Native.