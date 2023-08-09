import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent {
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
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.book.id = this.route.snapshot.paramMap.get('id');
    this.getBook();
  }

  getBook(): void{
    this.service.getBook(this.book.id).subscribe(
      resp => {
        this.book = resp;
      }
    )
  }

  update(): void {
    if (!this.title.value || !this.genre.value || !this.author.value || !this.publishing_company.value) {
      this.toastr.error('Please fill in all fields');
      return; 
    }
    this.service.updateBook(this.book).subscribe(
      () => {
        this.toastr.success('Book updated');
        this.router.navigate(['/book']);
      },
      error => {
        this.toastr.error('Error updating book', error.message);
      }
    );
  }
}
