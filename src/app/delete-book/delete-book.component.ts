import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // deleteBook(event) {
  //   let bookIndex = $scope.books.findIndex( e => e.id == deleteID );
  //   books.splice( bookIndex, 1 );
  // }

}
