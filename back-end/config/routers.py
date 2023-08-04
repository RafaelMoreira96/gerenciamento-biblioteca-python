from fastapi import FastAPI
import controllers.book_controller as controller
import models.book as book

class Routers:
    def __init__(self):
        self.app = FastAPI()

    def crud_routers(self):
        @self.app.post("/book/create")
        def create_book(book: book.Book):
            controller.create_book(book)
            return {'message': 'Book created successfully'}

        @self.app.get("/book/list")
        def list_books():
            return controller.list_books()
        
        @self.app.put("/book/update/{id}")
        def update_book(id: int, book: book.Book):
            controller.update_book(id, book)
            return {'message': 'Book updated successfully'}
          
        @self.app.delete("/book/remove/{id}")
        def remove_book(id: int):
            controller.delete_book(id)
            return {'message': 'Book removed successfully'}
        
        @self.app.get("/book/get/{id}")
        def get_book(id: int):
            return controller.get_book(id)
