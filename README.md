# Projeto de Estudos com Python para o Desafio 3

Este é um projeto de estudos que visa aplicar conhecimentos básicos de CRUD e de API para o preparo para o próximo desafio.

## Requisitos para rodar a aplicação

- pip install fastapi@0.100.0
- pip install pip-chill@1.0.3
- pip install uvicorn@0.22.0

## Requisições para a API

- Adicionar um livro: `[post] localhost:8000/book/create`
- Listar livros: `[get] localhost:8000/book/list`
- Atualizar um livro: `[put] localhost:8000/book/update/{id}`
- Remover um livro: `[delete] localhost:8000/book/remove/{id}`