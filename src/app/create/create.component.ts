import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../Services/book.service';
import { Book } from '../Model/book';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  // Dependency Injection
  constructor(private bookService: BookService) { };

  onBookFormSubmit(bookForm: NgForm) {

    //creating a book object and storing the form data into it..................
    let book: Book =
    {
      title: bookForm.value.title,
      author: bookForm.value.author,
      price: bookForm.value.price,
      genre: bookForm.value.genre,
      pages: bookForm.value.pages,
      description: bookForm.value.description,
      date: bookForm.value.date,
      coverpage: bookForm.value.coverpage,
    }

    this.bookService.addBook(book);
  }

}
