import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  token: string;

  isAuthenticated() {
    
  }

  login(username: string, password: string) {
    return this.httpClient.post(`${environment.apiUrl}/login`, { username, password });
  }

  logout() {
    localStorage.removeItem('id_token');
  }

  setSession(authSet) {
    localStorage.setItem('id_token', authSet.token);
  }

  createUser(body: any) {
    this.token = localStorage.getItem('id_token');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + this.token,
    });
    return this.httpClient.post(`${environment.apiUrl}/users/`, body, { headers: header });
  }

  getUsers() {
    this.token = localStorage.getItem('id_token');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + this.token,
    });
    return this.httpClient.get(`${environment.apiUrl}/users`, { headers: header });
  }

  getUser(id: number) {
    this.token = localStorage.getItem('id_token');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + this.token,
    });
    return this.httpClient.get(`${environment.apiUrl}/users/${id}`, { headers: header });
  }

  editUser(id: number, body: any) {
    this.token = localStorage.getItem('id_token');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + this.token,
    });
    return this.httpClient.put(`${environment.apiUrl}/users/${id}`, body, { headers: header });
  }

  deleteUser(id: number) {
    this.token = localStorage.getItem('id_token');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + this.token,
    });
    return this.httpClient.delete(`${environment.apiUrl}/users/${id}`, { headers: header });
  }

  getCareers() {
    this.token = localStorage.getItem('id_token');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + this.token,
    });
    return this.httpClient.get(`${environment.apiUrl}/careers/`, { headers: header });
  }

  createCareer(body: any) {
    this.token = localStorage.getItem('id_token');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + this.token,
    });
    return this.httpClient.post(`${environment.apiUrl}/careers/`, body, { headers: header });
  }

  getCareer(id: number) {
    this.token = localStorage.getItem('id_token');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + this.token,
    });
    return this.httpClient.get(`${environment.apiUrl}/careers/${id}`, { headers: header });
  }

  editCareer(id: number, body: any) {
    this.token = localStorage.getItem('id_token');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + this.token,
    });
    return this.httpClient.put(`${environment.apiUrl}/careers/${id}`, body, { headers: header });
  }

  deleteCareer(id: number) {
    this.token = localStorage.getItem('id_token');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + this.token,
    });
    return this.httpClient.delete(`${environment.apiUrl}/careers/${id}`, { headers: header });
  }

}
