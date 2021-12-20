import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { ListComponent } from './components/list/list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { AppRoutingModule } from './app-routing.module';
import { SimpleModalModule } from 'ngx-simple-modal';
import { ModalComponent } from './components/modal/modal.component';
import { AuthComponent } from './components/auth/auth.component'
import { JwtInterceptorService } from './servises/jwt-interceptor.service';
import { LoginHeaderComponent } from './components/login-header/login-header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NoAuthInfoComponent } from './components/no-auth-info/no-auth-info.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';





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
    LayoutComponent,
    NoAuthInfoComponent


  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SimpleModalModule.forRoot({ container: document.body },),
    ToastrModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptorService,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
