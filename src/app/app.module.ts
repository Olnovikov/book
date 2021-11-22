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

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ListComponent,
    CreateFormComponent,
    SearchFormComponent,

  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
