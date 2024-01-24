import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CartService } from 'src/app/core/constants/services/cart.service';
import { Book } from '../home/interfaces/book.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule,MatToolbarModule,MatIconModule,MatButtonModule,MatMenuModule,RouterModule,MatCardModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  cartService=inject(CartService);
  cart$:Observable<Book[]>
  cartSum$:Observable<number>
  ngOnInit(): void {
    this.cart$=this.cartService.getCart();
    this.cartSum$=this.cartService.getCart().pipe(
      map((books)=>Math.floor(books.map(({price})=>price).reduce((a,b)=>a+b,0)*100)/100)
    )
  }
}
