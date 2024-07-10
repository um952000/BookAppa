import { Component, OnInit, viewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../Services/book.service';
import { Book } from '../Model/book';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})

export class DetailComponent implements OnInit {

  id: string | null = "";
  book: Book | null = null;
  isEdit: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    if (this.id !== null) {
      const book = this.bookService.getBookById(this.id);
      if (book) {
        this.book = book;
      } else {
        console.error('Error fetching book: Book not found');
      }
    }
  }

  toggleEdit(): void {
    this.isEdit = !this.isEdit;

  }

  updateBook(): void {
    if (this.book !== null && this.id !== null) {
      const success = this.bookService.updateBookById(this.id, this.book);
      if (success) {
        alert('Book updated successfully');
        this.isEdit = false; // Exit edit mode
        this.router.navigate(['/show']); // Optionally navigate to another page
      } else {
        console.error('Error updating book');
      }
    }
  }

  deletePost(): void {
    if (this.id !== null) {
      const success = this.bookService.deletePostById(this.id);
      if (success) {
        alert('Book deleted successfully');
        this.router.navigate(['/show']); // Navigate to the list of books after deletion
      } else {
        console.error('Error deleting book: Book not found');
      }
    }
  }
}