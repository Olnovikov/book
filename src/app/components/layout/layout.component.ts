import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../servises/api.service';
import { AuthService } from '../../servises/auth.service';
import { UserService } from '../../stores/user.store';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(public router: Router, public AuthService: AuthService, public UserStore: UserService,public ApiService:ApiService) { }

  ngOnInit(): void {
    this.router.navigate(['list']);
    this.ApiService.getProfileApi()
  }

}
