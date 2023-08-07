# API de gerenciamento de bibloteca

Este é um projeto de estudos que visa aplicar os conhecimentos abaixo:
- O uso do SQL Alchemy
- Implementação do FastAPI para requisições
- Com o SQL Alchemy, a utilização de um banco de dados simples (SQLite)
- Aprendizado com um modelo de arquitetura de software baseado no MVC
- Utilizar os conceitos de orientação à objetos

## Requisitos para rodar a aplicação

- `sudo apt-get install python3.8-full`
- `pip install fastapi==0.100.0`
- `pip install pip-chill==1.0.3`
- `pip install uvicorn==0.22.0`
- `pip install sqlalchemy==2.0.19`

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
## Implementação em andamento

A implementação do front-end, como citado anteriormente, em versionamentos anteriores, está sendo feita utilizando o Angular 16. Até o presente momento, foi feita as telas de cadastro dos livros e uma listagem de tudo que foi salvo no banco de dados. Também foram escritas algumas rotas e feito um `service` para consumir a API.

Até o momento, as requisições de "adicionar um livro" e "listar livros", foram implementadas com sucesso. Ainda será feita algumas melhorias, porém já está funcional.

## Implementações futuras

A próxima idéia é desenvolver uma aplicação mobile para fazer o consumo da API. A tecnologia utilizada será o ReactNative.