import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  show: any = { name: '' };
  editId: any;
  errors = [];

  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.findById(params['id']);
    });
  }

  findById(id) {
    const observable = this.http.getById(id);
    observable.subscribe((data: any) => {
      console.log(data);
      this.show = data;
    });
  }
}
