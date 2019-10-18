import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  authors = [];

  getAuthors() {
    return this.authors;
  }

  pushToAuthors(author) {
    return this.authors.push(author);
  }
}
