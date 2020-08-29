import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  bgImageUrl = '../assets/backgroundLogin.jpg';
  loginForm = new FormGroup({
      email: new FormControl('', Validators.pattern('/.*@.*..*/')),
      password: new FormControl('')
  });
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  loginToStartPage(): void{
    this.router.navigateByUrl('/start');
  }
}
