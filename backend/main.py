from fastapi import FastAPI, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session

import models
from database import SessionLocal

app = FastAPI()


class RegisterRequest(BaseModel):
    email: str
    password: str


@app.get("/")
def root():
    return {"message": "Backend works"}


@app.post("/register")
def register(data: RegisterRequest):
    return {
        "message": "User registered",
        "email": data.email
    }
    


