import { Component, OnInit } from '@angular/core';
import {Books} from "../../model/books";
import {BooksService} from "../../service/books.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    books: Books[]=[];
    constructor(private booksService: BooksService) { }

    ngOnInit(): void {
      this.booksService.getAll().subscribe(result =>{
          this.books = result;
          console.log(result);
        },error => {
          console.log(error);
        }
      )
    }
  }


