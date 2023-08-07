import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})

export class BookCreateComponent implements OnInit {
  book: Book = {
    id: '',
    title: '',
    genre: '',
    author: '',
    publishing_company: '',
  };

  title: FormControl = new FormControl(null, Validators.required);
  genre: FormControl = new FormControl(null, Validators.required);
  author: FormControl = new FormControl(null, Validators.required);
  publishing_company: FormControl = new FormControl(null, Validators.required);

  constructor(
    private service: BookService,
    private router: Router,
  ){

  }

  ngOnInit(): void {}

  create(): void {
    this.service.createBook(this.book).subscribe(
      res => {
        this.router.navigate(['']);
      }
    )
  }
}
