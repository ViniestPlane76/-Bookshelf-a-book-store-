import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'
import { BooksService } from './api/books.service';
import { Observable } from 'rxjs';
import { Book } from './interfaces/book.interface';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CartService } from 'src/app/core/constants/services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatProgressSpinnerModule,MatCardModule,SearchbarComponent,FilterPipe],
  providers:[
    BooksService
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books$: Observable<Book[]>;
  search = "";
  cartService=inject(CartService);
  constructor(
    private bookService:BooksService
  ){}

  ngOnInit(): void {
    this.books$ = this.bookService.getBooks();
  }
  handleChange(value:string): void{
    this.search=value;
  }
  addBook(book:Book):void{
    this.cartService.addToCart(book);
  }
}
