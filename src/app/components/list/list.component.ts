import { Component, OnInit } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { ModalComponent } from '../modal/modal.component';
import { Observable } from 'rxjs';
import { Book } from 'src/app/interfaces/book';
import { Store } from '@ngrx/store';
import { selectselectBooks } from 'src/app/store/selectors/books.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private simpleModalService: SimpleModalService, private store: Store) { }

  // @ts-ignore
  booksList$: Observable<Book[]> = this.store.select(selectselectBooks)
  ngOnInit(): void { }

  showCreatedForm() {
    this.simpleModalService.addModal(ModalComponent, {}, { closeOnClickOutside: true },
    )

  }

}






