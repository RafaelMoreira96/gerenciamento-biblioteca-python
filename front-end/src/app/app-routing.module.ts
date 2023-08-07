import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCreateComponent } from './components/book/book-create/book-create.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BookListComponent } from './components/book/book-list/book-list.component';

const routes: Routes = [
  {
    path: '', 
    component: SidebarComponent,
    children: [
      {path: 'book', component: BookListComponent},
      {path: 'book/create', component: BookCreateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
