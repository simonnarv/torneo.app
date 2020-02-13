import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Token } from 'src/app/models/Token';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  constructor(private loginService: LoginService,
    private router: Router,
    private actRoute: ActivatedRoute) { }

  user: User = {
    email: "",
    password: ""
  };

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.user).subscribe(
      {
        next: (token: Token) => localStorage.setItem("token", token.token),
        error: error => console.error('There was an error!', error)
      }
    );
  }

}
