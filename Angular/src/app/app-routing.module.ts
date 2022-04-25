import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './crud/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieModDelComponent } from './movie-mod-del/movie-mod-del.component';
import { MovieUpdateComponent } from './movie-update/movie-update.component';
import { MovieInsertComponent } from './movie-insert/movie-insert.component';
import { AdmininsertComponent } from './admininsert/admininsert.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserloginpageComponent } from './userloginpage/userloginpage.component';
import { MovieuserinsertComponent } from './movieuserinsert/movieuserinsert.component';

const routes: Routes = [
  {
    path: '', component: UserloginpageComponent
  },
  {
    path: 'movie/:id', component: MovieDetailsComponent
  },
  {
    path: 'collection', component: MovieModDelComponent
  },
  {
    path: 'remove/:id', component: MovieModDelComponent
  },
  {
    path: 'update/:id', component: MovieUpdateComponent
  },
  {
    path: 'insert', component: MovieInsertComponent
  },
  {
    path: 'admin/register', component: AdmininsertComponent
  },
  {
    path: 'admin/login', component: AdminLoginComponent
  },
  {
    path: 'user/login', component: UserloginpageComponent
  },
  {
    path: 'movieDetails', component: MovieListComponent
  },
  {
    path: 'user/register', component: MovieuserinsertComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
