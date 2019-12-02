import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'; import { Router } from '@angular/router';
;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string;
  password: string;
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.api.login(this.username, this.password).subscribe(response => {
      this.api.setSession(response);
      this.router.navigate(['/home']).then(() => {
        window.location.reload();
      });
    });
  }

}
