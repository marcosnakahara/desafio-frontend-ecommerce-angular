import { Component, OnInit } from '@angular/core';
import { BookService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  books: any;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBook().subscribe( {
      next: data => {
        this.books = data;
        console.log(this.books);
      },
      error: err => console.log("Error", err)
    })
  }

}
