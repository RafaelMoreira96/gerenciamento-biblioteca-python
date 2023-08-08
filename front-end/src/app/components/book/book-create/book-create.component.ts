import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private toastr: ToastrService,
    private router: Router,
  ){}

  ngOnInit(): void {}

  create(): void {
    if (!this.title.value || !this.genre.value || !this.author.value || !this.publishing_company.value) {
      this.toastr.error('Please fill in all fields');
      return; 
    }
    this.service.createBook(this.book).subscribe(
      res => {
        this.toastr.success('Book created successfully');
        this.router.navigate(['book']);
      }, 
      (ex) => {
        this.toastr.error('Error:', ex.error.message);
        this.router.navigate(['book']);
      }
    )
  }
}
