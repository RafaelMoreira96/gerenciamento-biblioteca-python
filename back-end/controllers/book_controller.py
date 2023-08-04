from sqlalchemy.orm import Session
from models.book import Book, BookDB
from config.sql_functions import get_session

def create_book(new_book: BookDB):
    session = get_session()
    book_instance = BookDB(
        title=new_book.title,
        genre=new_book.genre,
        author=new_book.author,
        publishing_company=new_book.publishing_company
    )
    session.add(book_instance)
    session.commit()
    session.close()
    
def list_books():
    session = get_session()
    books = session.query(BookDB).all()
    session.close()
    return books
    
def update_book(id: int, updated_book: BookDB):
    session = get_session()
    book_to_update = session.query(BookDB).filter_by(id=id).first()
    if book_to_update:
        book_to_update.title =  updated_book.title
        book_to_update.author = updated_book.author
        book_to_update.genre = updated_book.genre
        book_to_update.publishing_company = updated_book.publishing_company
        session.commit()
    session.close()
    
def delete_book(id: int):
    session = get_session()
    book_to_delete = session.query(BookDB).filter_by(id=id).first()
    if book_to_delete:
        session.delete(book_to_delete)
        session.commit()
    session.close()
    
def get_book(id: int):
    session = get_session()
    book = session.query(BookDB).filter_by(id=id).first()
    session.close()
    return book