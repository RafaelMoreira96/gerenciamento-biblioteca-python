from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from pydantic import BaseModel

Base = declarative_base()

class BookDB(Base):
    __tablename__ = 'book'
    
    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    genre = Column(String, nullable=False)
    author = Column(String, nullable=False)
    publishing_company = Column(String, nullable=False)

class Book(BaseModel):
    title: str
    genre: str
    author: str
    publishing_company: str