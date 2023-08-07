import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
  BOOK_LIST: Book[] = [];

  constructor(private service: BookService){}
  
  ngOnInit(): void {
      this.findAll()
  }

  findAll(): void {
    this.service.getBooks().subscribe((resp) => {
      this.BOOK_LIST = resp;
    });
  }

}
