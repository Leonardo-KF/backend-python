from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from uuid import uuid4


app = FastAPI()

origins = [
    "http://127.0.0.1:5500",
    "http://localhost",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class animals(BaseModel):
    id: Optional[str]
    name: str
    age: int
    sex: str
    color: str


banco: List[animals] = []


@app.post("/animals")
def animal(animal: animals):
    animal.id = str(uuid4())
    banco.append(animal)
    return {"Animal successfully registered!"}


@app.get("/animals")
def listAnimals():
    return banco


@app.get("/animals/{animal_id}")
def animalID(animal_id: str):
    for animal in banco:
        if animal.id == animal_id:
            return animal
    return {"Animal not founded"}


@app.delete("/animals/{animal_id}")
def animalID(animal_id: str):
    for i, animal in enumerate(banco):
        if animal.id == animal_id:
            banco.pop(i - 1)
            return {"Animal deleted successfully"}
    return {"Animal not founded"}
