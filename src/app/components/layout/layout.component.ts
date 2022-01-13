import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from 'src/app/store/actions/user.actions';
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
    if (this.UserStore.token) {
      this.ApiService.getProfileApi();
    } else {
      this.router.navigate(['auth']);
    }

    this.ApiService.getBooksApi()
    this.ApiService.getGenresApi()

  }

}
