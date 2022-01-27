import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Books} from "../model/books";
const API_URL = 'http://localhost:3000/books';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient: HttpClient) {}
  getAll(): Observable<Books[]> {
    return this.httpClient.get<Books[]>(API_URL);
  }
}
