import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { DataService } from './data.service';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor() { }

  // empty form/db object to map
  // newAuthor: any = {
  //   author: '',
  // };

  // to show or hide errors if any
  // hasErrors = false;
  // errors: any = [];

  // Holdas all db calls made
  // authors = [];


  ngOnInit() {
    // this.getAllAuthors();
    // this.data.pushToAuthors({ author: 'data' });
    // console.log(this.data.getAuthors());
  }

  // deleteAuthor(id) {
  //   const observable = this.http.deleteById(id);
  //   observable.subscribe((data: any) => {
  //     console.log(data);
  //     this.getAllAuthors();
  //   });

  // }

  // getAllAuthors(){
  //   const observable = this.http.getAll();
  //   observable.subscribe((data: any) => {
  //     this.authors = data;
  //   });
  // }

  // submitAuthor() {
  //   const observable = this.http.createAuthor(this.newAuthor);
  //   observable.subscribe((data: any) => {
  //     if (data.message === 'fail') {
  //       this.errors = this.errorHelper(data.err.errors);
  //     } else {
  //       this.errors = [];
  //       this.newAuthor = {
  //         title: '',
  //         age: '',
  //         desc: ''
  //       };
  //       this.getAllAuthors();
  //     }
  //   });
  // }

  // errorHelper(errorMessage: any) {
  //   const errorArr = [];

  //   for (const error in errorMessage) {
  //     errorArr.push({ path: errorMessage[error].path, message: errorMessage[error].message });
  //   }
  //   return errorArr;
  // }
}
