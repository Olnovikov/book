import { Component, OnInit } from '@angular/core';
import { AuthService } from '../stores/auth.service';
import { UserService } from '../stores/user.service';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.scss']
})
export class LoginHeaderComponent implements OnInit {

  constructor(public UserService: UserService, public AuthService: AuthService) { }

  ngOnInit(): void {
  }

}
