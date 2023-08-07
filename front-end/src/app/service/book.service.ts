import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>('http://localhost:8000/book/create', book);
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:8000/book/list');
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`http://localhost:8000/book/${book.id}`, book);
  }

  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(`http://localhost:8000/book/${id}`);
  } 

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`http://localhost:8000/book/${id}`);
  }
}