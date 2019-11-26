import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private httpClient: HttpClient) { }

  getApi(path: string) {
    return this.httpClient.get(`${environment.apiUrl}/${path}`);
  }

  login(username: string, password: string) {
    return this.httpClient.post(`${environment.apiUrl}/login`, { username, password });
  }

  createUser(body: any) {
    return this.httpClient.post(`${environment.apiUrl}/users/`, body);
  }

  getUsers() {
    return this.httpClient.get(`${environment.apiUrl}/users`);
  }

  getUser(id: number) {
    return this.httpClient.get(`${environment.apiUrl}/users/${id}`);
  }

  editUser(id: number, body: any) {
    return this.httpClient.put(`${environment.apiUrl}/users/${id}`, body);
  }

  deleteUser(id: number) {

  }

}
