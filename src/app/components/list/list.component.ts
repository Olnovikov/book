import { Component, OnInit } from '@angular/core';
import { BookOperationsService } from '../../stores/book-operations.store';
import { SimpleModalService } from 'ngx-simple-modal';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(public bookOperationsStore: BookOperationsService, private simpleModalService: SimpleModalService) { }

  ngOnInit(): void { }

  showCreatedForm() {
    this.simpleModalService.addModal(ModalComponent, {}, { closeOnClickOutside: true },
    )

  }

}






