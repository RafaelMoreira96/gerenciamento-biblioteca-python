import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
  title = 'datatables';
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject<any>();

  BOOK_LIST: Book[] = [];

  constructor(
    private service: BookService,
    private router: Router,
    private toastr: ToastrService
  ){}
  
  ngOnInit(): void {
    this.dtOptions = {
      paging: false,
      searching: false,
      pageLength: 10,
      processing: true,
    };
    this.findAll()
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  findAll(): void {
    this.service.getBooks().subscribe((resp) => {
      this.BOOK_LIST = resp;
      this.dtTrigger.next(this.BOOK_LIST);
    });
  }

  delete(id: any): void {
    this.service.deleteBook(id).subscribe((resp) => {
      this.toastr.success('Book deleted successfully');
      this.dtTrigger.next(this.findAll());
    }, 
    (ex) => {
      this.toastr.error(ex.error.message);
      this.findAll();
    });
  }
}
