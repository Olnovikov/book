import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from 'src/app/store/actions/user.actions';
import { AppState } from 'src/app/store/state/app.state';
import { ApiService } from '../../servises/api.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(public ApiServise: ApiService, private store: Store<AppState>, public router: Router) { }
  loginForm: FormGroup

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl('test', Validators.required),
      password: new FormControl('qwerty', Validators.required),
    })
  }

  submit() {

    this.store.dispatch(login(this.loginForm.value))

    // this.ApiServise.getTokenApi(this.loginForm.value.login, this.loginForm.value.password)
  }

}
