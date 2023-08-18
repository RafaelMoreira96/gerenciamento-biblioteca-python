from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models.book import Base

engine = create_engine('sqlite:///files/library.sqlite')

Session = sessionmaker(bind=engine)
session = Session()

Base.metadata.create_all(engine)

def get_session() -> Session:
    return Session()