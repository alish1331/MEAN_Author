import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    private http: HttpService,
    private router: Router) { }

  newAuthor: any = {
    name: ''
  };

  // to show or hide errors if any
  hasErrors = false;
  errors: any = [];

  // Holds all db calls made
  authors: any = [];

  ngOnInit() {
    // console.log('Create is running!');
  }

  submitAuthor() {
    const observable = this.http.createAuthor(this.newAuthor);
    observable.subscribe((data: any) => {
      if (data.message === 'fail') {
        this.errors = this.errorHelper(data.err.errors);
      } else {
        this.errors = [];
        this.newAuthor = {
          name: ''
        };
        this.router.navigate(['/index']);
      }
    });
  }

  errorHelper(errorMessage: any) {
    const errorArr = [];
    // tslint:disable-next-line: forin
    for (const error in errorMessage) {
      // console.log(errorMessage[error].message);
      errorArr.push({ path: errorMessage[error].path, message: errorMessage[error].message });
    }
    return errorArr;
  }
}
