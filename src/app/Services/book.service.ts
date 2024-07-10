import { Injectable } from '@angular/core';
import { Book } from '../Model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private allBooks: Book[] = [];

  constructor() { }

  addBook(book: Book) {

    book.id = this.generateRandomId();
    this.allBooks.push(book);
  }

  getAllBook(): Book[] {

    return this.allBooks;
  }

  getBookById(id: string): Book | undefined {

    let book = this.allBooks.find(book => book.id === id);
    return book;
  }

  deletePostById(id: string) {
    const index = this.allBooks.findIndex(book => book.id === id);
    if (index !== -1) {
      this.allBooks.splice(index, 1);
      return true; // Return true to indicate success
    } else {
      return false; // Return false to indicate failure
    }
  }

  updateBookById(id: string, updatedBook: Book) {
    const index = this.allBooks.findIndex(book => book.id === id);
    if (index !== -1) {
      this.allBooks[index] = { ...updatedBook, id }; // Preserve the original ID
      return true; // Return true to indicate success
    } else {
      return false; // Return false to indicate failure
    }
  }

  generateRandomId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }
    return result;
  }
}