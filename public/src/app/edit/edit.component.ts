import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  authorEdit: any = {
    name: ''
  };
  editId: any;

  hasErrors = false;
  errors: any = [];


  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.findById(params['id']);
    });
  }

  findById(id) {
    const observable = this.httpService.getById(id);
    observable.subscribe((data: any) => {
      // console.log(data);
      this.authorEdit = data;
    });
  }

  editAuthor(id, author) {
    const observable = this.httpService.updateById(author);
    observable.subscribe((data: any) => {
      // console.log(data);
      if (data.message === 'fail') {
        this.errors = this.errorHelper(data.err.errors);
        // console.log(this.errors);
      } else {
        this.errors = [];
        this.authorEdit = data;
        this.router.navigate(['/index']);
      }
    });
  }

  errorHelper(errorMessage: any) {
    const errorArr = [];
    // tslint:disable-next-line:forin
    for (const error in errorMessage) {
      // console.log(error);
      errorArr.push({ path: errorMessage[error].path, message: errorMessage[error].message });
    }
    return errorArr;
  }
}

