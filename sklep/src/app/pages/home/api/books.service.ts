import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../interfaces/book.interface';
import { environments } from 'src/environments/environments';
import { API } from 'src/app/core/constants/api.const';

@Injectable()
export class BooksService {

  constructor(
    private http:HttpClient,
  ) { }

  getBooks():Observable<Book[]> {
    return this.http.get<Book[]>(`${environments.httpBackend}${API.BOOK}`)
    // return of([{"id":1,"title":"Lord Of The Rings","author":"J.R.R Tolkien","price":21.37},{"id":2,"title":"Hobbit","author":"J.R.R Tolkien","price":69.69}])
  }
}
