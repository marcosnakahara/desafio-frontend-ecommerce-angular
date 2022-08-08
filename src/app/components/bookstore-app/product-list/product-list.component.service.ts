import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Book } from "./model/Book";

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private url = "http://localhost:44382/api/bookstore";

    httpOptions = {
        Headers: new Headers({
            'Content-Type': 'application/json'
        })
    }
    constructor(private http:HttpClient) {}

    getBook() {
        return this.http.get<Book>(this.url);
    }
}