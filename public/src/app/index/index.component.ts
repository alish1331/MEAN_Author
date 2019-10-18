import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  constructor(private http: HttpService) { }

  authors: any = [];

  ngOnInit() {
    console.log('Index is running!');
    this.getAllAuthors();
  }

  getAllAuthors() {
    const observable = this.http.getAll();
    observable.subscribe((data: any) => {
      this.authors = data;
      console.log(data);
    });
  }

  deleteAuthor(id) {
    const observable = this.http.deleteById(id);
    observable.subscribe((data: any) => {
      console.log(data);
      this.getAllAuthors();
    });
  }
}
