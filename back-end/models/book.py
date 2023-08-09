from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from pydantic import BaseModel, Field

Base = declarative_base()

class BookDB(Base):
    __tablename__ = 'book'
    
    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    genre = Column(String, nullable=False)
    author = Column(String, nullable=False)
    publishing_company = Column(String, nullable=False)

class Book(BaseModel):
    title: str = Field(..., description="Title of the book")
    genre: str = Field(..., description="Genre of the book")
    author: str = Field(..., description="Author of the book")
    publishing_company: str = Field(..., description="Publishing company of the book")