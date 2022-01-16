import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getBooksListSuccess } from 'src/app/store/actions/books.actions';
import { login, loginSuccess } from 'src/app/store/actions/user.actions';
import { selectselectBooks } from 'src/app/store/selectors/books.selectors';
import { ApiService } from '../../servises/api.service';
import { UserService } from '../../stores/user.store';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(
    private store: Store,
    public router: Router,
    public UserStore: UserService,
    public ApiService: ApiService,
  ) { }

  ngOnInit(): void {

    if (localStorage.getItem('access_token')) {
      this.ApiService.getProfileApi().subscribe(
        res => this.store.dispatch(loginSuccess(res))
      )

    } else {
      this.router.navigate(['auth']);
    }

    this.ApiService.getBooksApi().subscribe(
      res => this.store.dispatch(getBooksListSuccess(res))
    )
    this.ApiService.getGenresApi()

  }

}
