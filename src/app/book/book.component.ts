import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Book } from '../books.model';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  // styleUrls: ['./book.component.css']
  encapsulation: ViewEncapsulation.None
})
export class BookComponent implements OnInit {
  public books: Book[] = [
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
  public author: string = '';
  public title: string = '';
  public cover: string = '';
  public read: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  addBook() {
    // console.log(f)
    console.log('hit')
    this.books.push( new Book(
      this.books.length + 1,
      this.author,
      this.title,
      this.cover,
      this.read
  ));
  }

  updateBook(id) {
    const editIndex = this.books.findIndex( e => e.id == id );
    this.books[editIndex].read = !this.books[editIndex].read;
    // console.log(this.books[editIndex].read)
  }

  deleteBook(event: number): void {
    // console.log(event)
    let bookIndex = this.books.findIndex( e => e.id == event );
    this.books.splice( bookIndex, 1 );
  }

  onUpdateBook(event: Event) {
    this.title = (<HTMLInputElement>event.target).value;
    // this.author = (<HTMLInputElement>event.target).value;
    // this.cover = (<HTMLInputElement>event.target).value;
  }
  onUpdateAuthor(event: Event) {
    this.author = (<HTMLInputElement>event.target).value;
  }
  onUpdateCover(event: Event) {
    this.cover = (<HTMLInputElement>event.target).value;
  }

}
