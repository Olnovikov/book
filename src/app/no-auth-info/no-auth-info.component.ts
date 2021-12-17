import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleModalComponent, SimpleModalService } from 'ngx-simple-modal';

@Component({
  selector: 'app-no-auth-info',
  templateUrl: './no-auth-info.component.html',
  styleUrls: ['./no-auth-info.component.scss']
})
export class NoAuthInfoComponent extends SimpleModalComponent<any, boolean> implements OnInit {

  constructor(public router: Router) { super() }

  ngOnInit(): void {
  }
  goToAuthPage() {
    this.router.navigate(['auth'])
    this.close()

  }
}
