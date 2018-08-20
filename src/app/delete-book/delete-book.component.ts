import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../books.model';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  @Input() book: Book
  @Output() bookId = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  passId() {
    this.bookId.emit(this.book.id)
  }

}
