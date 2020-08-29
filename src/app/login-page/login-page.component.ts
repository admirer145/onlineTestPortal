import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ManageQuestionsService} from '../manage-questions.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  // bgImageUrl = '../assets/backgroundLogin.jpg';
  loginForm = new FormGroup({
      email: new FormControl('', Validators.pattern('/.*@.*..*/')),
      password: new FormControl('')
  });
  constructor(public router: Router, public manageQuestionsServive: ManageQuestionsService) {
    manageQuestionsServive.resetUserData();
  }

  ngOnInit(): void {
  }

  loginToStartPage(): void{
    this.router.navigateByUrl('/start');
  }
  loginToRegisterPage(): void{
    this.router.navigateByUrl('/register');
  }
}
