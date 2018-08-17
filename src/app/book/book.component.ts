import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Book } from '../books.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  // styleUrls: ['./book.component.css']
  encapsulation: ViewEncapsulation.None
})
export class BookComponent implements OnInit {
  books: Book[] = [
    new Book(
      1,
      'Carl Jung',
      'The Red Book',
      'https://images-na.ssl-images-amazon.com/images/I/31Fs2rG9zNL._SY346_.jpg',
      true
    ),
    new Book(
      2,
      'Marcus Aurelius',
      'Meditations',
      'https://images-na.ssl-images-amazon.com/images/I/51cQEdN9KuL._SX331_BO1,204,203,200_.jpg',
      true
    ),
    new Book(
      3,
      "Crime and Punishment",
      "Fyodor Dostoyevsky",
      "https://images-na.ssl-images-amazon.com/images/I/5157Xn%2BsKiL._SY346_.jpg",
      true
    )
  ];

  constructor() { }

  ngOnInit() {
  }

  deleteBook(event) {
    console.log(event)
    let bookIndex = this.books.findIndex( e => e.id == event );
    this.books.splice( bookIndex, 1 );
  }

}
