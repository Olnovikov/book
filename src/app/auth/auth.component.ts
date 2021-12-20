import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../servises/api.service';
import { AuthService } from '../servises/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(public AuthService: AuthService,public ApiServise:ApiService) { }
  loginForm: FormGroup

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl('test', Validators.required),
      password: new FormControl('qwerty', Validators.required),
    })
  }

  submit() {

    this.ApiServise.getTokenApi(this.loginForm.value.login, this.loginForm.value.password)
  }

}
