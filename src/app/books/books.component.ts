import { Component, OnInit } from '@angular/core';
import { BindingFlags } from '@angular/compiler/src/core';
import { Book } from '../book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  book: Book = {
      id: 1, 
      name: 'Hatchet'
  } ;

  constructor() { }
    
  ngOnInit() {
  }

}
