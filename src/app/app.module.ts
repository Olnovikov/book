import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { ListComponent } from './list/list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchFormComponent } from './search-form/search-form.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EditFormComponent } from './edit-form/edit-form.component';
import { AppRoutingModule } from './app-routing.module';
import { SimpleModalModule } from 'ngx-simple-modal';
import { ModalComponent } from './modal/modal.component';
import { AuthComponent } from './auth/auth.component'
import { JwtInterceptorService } from './servises/jwt-interceptor.service';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { LayoutComponent } from './layout/layout.component';






@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ListComponent,
    SearchFormComponent,
    EditFormComponent,
    ModalComponent,
    AuthComponent,
    LoginHeaderComponent,
    LayoutComponent


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
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptorService,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
