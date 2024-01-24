import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../interfaces/book.interface';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: string, books: Book[]): Book[] {
    if(!value) return books;
    return books.filter((item)=>item.title.toLowerCase().includes(value.toLowerCase()))
  }

}
