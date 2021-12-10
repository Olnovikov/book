import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { ListComponent } from './list/list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchFormComponent } from './search-form/search-form.component';
import { HttpClientModule } from '@angular/common/http';
import { EditFormComponent } from './edit-form/edit-form.component';
import { AppRoutingModule } from './app-routing.module';
import { SimpleModalModule } from 'ngx-simple-modal';
import { ModalComponent } from './modal/modal.component'



@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ListComponent,

    SearchFormComponent,
    EditFormComponent,
    ModalComponent,


  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule,
    AppRoutingModule,
    SimpleModalModule.forRoot({ container: document.body })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
