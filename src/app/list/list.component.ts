import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookOperationsService } from '../stores/book-operations.store';
import { SimpleModalService } from 'ngx-simple-modal';
import { ModalComponent } from '../modal/modal.component';
import { UserService } from '../stores/user.store';
import { AuthService } from '../servises/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(public bookOperationsService: BookOperationsService, public router: Router, private simpleModalService: SimpleModalService, public UserService: UserService, public AuthService: AuthService) { }

  ngOnInit(): void {

    // this.AuthService.checkToken()
    // this.UserService.getProfile()

  }

  showCreatedForm() {
    this.simpleModalService.addModal(ModalComponent, {}, { closeOnClickOutside: true },
    )

  }

}






