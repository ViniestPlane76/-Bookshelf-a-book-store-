import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CartService } from '../core/constants/services/cart.service';
import { Observable, map } from 'rxjs';
import { Book } from '../pages/home/interfaces/book.interface';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule,MatToolbarModule,MatIconModule,MatButtonModule,MatMenuModule,RouterModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  cartService=inject(CartService);
  cart$:Observable<Book[]>
  cartSum$:Observable<number>
  ngOnInit(): void {
    this.cart$=this.cartService.getCart();
    this.cartSum$=this.cartService.getCart().pipe(
      map((books)=>Math.floor(books.map(({price})=>price).reduce((a,b)=>a+b,0)*100)/100)
    )
  }
  removeItem(i:number):void {
    this.cartService.removeAt(i);
  }
}
