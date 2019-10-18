import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('/api/authors');
  }

  createAuthor(data) {
    return this.http.post('/api/authors', data);
  }

  getById(id) {
    return this.http.get(`/api/author/${id}`);
  }

  updateById(author) {
    return this.http.put(`/api/edit/${author._id}`, author);
  }

  deleteById(id) {
    return this.http.delete(`/api/authors/${id}`);
  }
}
