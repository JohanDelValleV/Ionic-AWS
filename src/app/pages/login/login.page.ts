import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string;
  password: string;
  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  login() {
    console.log('Hola', this.username, this.password);
    this.api.login(this.username, this.password).subscribe(response => {
      console.log(response);
    });
  }

}
