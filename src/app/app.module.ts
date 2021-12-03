import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { ListComponent } from './list/list.component';
import { CreateFormComponent } from './create-form/create-form.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchFormComponent } from './search-form/search-form.component';
import {HttpClientModule} from '@angular/common/http';
import { EditFormComponent } from './edit-form/edit-form.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ListComponent,
    CreateFormComponent,
    SearchFormComponent,
    EditFormComponent,
   

  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
