import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servises/auth.service';
import { UserService } from '../stores/user.store';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(public router: Router, public AuthService: AuthService, public UserService: UserService) { }

  ngOnInit(): void {

    this.UserService.getProfile()
  }

}
