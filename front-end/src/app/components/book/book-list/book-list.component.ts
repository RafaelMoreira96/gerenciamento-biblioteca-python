import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
  BOOK_LIST: Book[] = [];

  constructor(
    private service: BookService,
    private router: Router,
    private toastr: ToastrService
  ){}
  
  ngOnInit(): void {
      this.findAll()
  }

  findAll(): void {
    this.service.getBooks().subscribe((resp) => {
      this.BOOK_LIST = resp;
    });
  }
  delete(id: any): void {
    this.service.deleteBook(id).subscribe((resp) => {
      this.toastr.success('Book deleted successfully');
      this.findAll();
    }, 
    (ex) => {
      this.toastr.error(ex.error.message);
      this.findAll();
    });
  }

}
