import { Injectable } from '@angular/core';
import { Book } from 'src/app/pages/home/interfaces/book.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart$= new BehaviorSubject<Book[]>([])
  constructor() { }
  addToCart(book:Book): void{
    this.cart$.next([...this.cart$.getValue(),book]);
  }
  getCart():Observable<Book[]>{
    return this.cart$.asObservable();
  }
  removeAt(index:number):void{
    this.cart$.next(this.cart$.getValue().filter((_,i)=>i!=index));
  }
}
