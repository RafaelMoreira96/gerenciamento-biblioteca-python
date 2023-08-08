import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCreateComponent } from './components/book/book-create/book-create.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { HomeComponent } from './components/home/home.component';
import { BookUpdateComponent } from './components/book/book-update/book-update.component';

const routes: Routes = [
  {
    path: '', 
    component: SidebarComponent,
    children: [
      {path: 'home', component: HomeComponent},

      {path: 'book', component: BookListComponent},
      {path: 'book/create', component: BookCreateComponent},
      {path: 'book/update/:id', component: BookUpdateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
