import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../stores/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(public AuthService:AuthService) { }
  loginForm:FormGroup

  ngOnInit(): void {
    this.loginForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('',Validators.required),
    })
  }

  submit() {

    this.AuthService.login(this.loginForm.value.login,this.loginForm.value.password)
  }

}
