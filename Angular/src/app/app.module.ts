import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MovieService } from './services/movie.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './crud/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { StringSplitPipe } from './pipes/string-split.pipe';
import { GetByMovieNameComponent } from './get-by-movie-name/get-by-movie-name.component';
import { MovieInsertComponent } from './movie-insert/movie-insert.component';
import { MovieModDelComponent } from './movie-mod-del/movie-mod-del.component';
import { MovieUpdateComponent } from './movie-update/movie-update.component';
import { AdmininsertComponent } from './admininsert/admininsert.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserloginpageComponent } from './userloginpage/userloginpage.component';
import { MovieuserinsertComponent } from './movieuserinsert/movieuserinsert.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailsComponent,
    StringSplitPipe,
    GetByMovieNameComponent,
    MovieInsertComponent,
    MovieModDelComponent,
    MovieUpdateComponent,
    AdmininsertComponent,
    AdminLoginComponent,
    UserloginpageComponent,
    MovieuserinsertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    //FormGroup,
    //FormControl,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  // exports: [
  //   MatAutocomplete,
  //   MatOption
  // ]
})
export class AppModule { }
