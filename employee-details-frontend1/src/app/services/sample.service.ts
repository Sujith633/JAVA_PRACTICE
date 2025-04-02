// src/app/services/sample.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  private apiUrl = 'http://localhost:8080/sample/home';

  constructor(private http: HttpClient) {}

  callWelcome() {
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }
}
