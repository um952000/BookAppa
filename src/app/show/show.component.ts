import { Component } from '@angular/core';
import { BookService } from '../Services/book.service';
import { Book } from '../Model/book';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {


  allBooks: Book[] = [];

  constructor(private bookService: BookService) {

    // fetching all the books from the service and pushing in our component array
    this.allBooks = bookService.getAllBook();
  };


}
