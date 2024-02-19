import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apiClient : HttpClient) {}

  getAllBooks(): Observable<any> {
    return this.apiClient.get('localhost:8080/api/v1/book');
  }

}
