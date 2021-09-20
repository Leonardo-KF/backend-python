from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


@app.get("/")
def root():
    return {"mensagem": "Hello, world"}


@app.get("/teste/{name}")
def home(name: str):
    text = f'Olá {name}!'
    return {"mensagem": text}


@app.get("/potence/{number}")
def potence(number: int):
    result = number * number
    text = f'O numero {number} ao quadrado é: {result}'
    return {"result": text}


@app.get("/double")
def double(number: int):
    result = number * 2
    text = f'O dobro de {number} é {result}'
    return {"resultado": text}


class Produtos(BaseModel):
    name: str
    price: float


@app.post('/produtos')
def products(produto: Produtos):
    return {'result': f'Produto {produto.name} com o valor de R${produto.price} cadastrado com sucesso!'}
