import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, PatternValidator, Validators} from '@angular/forms';
import {ManageQuestionsService} from '../manage-questions.service';
import {CustomFormValidations} from '../custom-form-validations'
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm;
  constructor(public router: Router, public manageQuestionsServive: ManageQuestionsService) {
    manageQuestionsServive.resetUserData();
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, CustomFormValidations.emailValidation]),
      password: new FormControl('', [Validators.required, CustomFormValidations.passwordValidation, Validators.minLength(8)])
    });
  }

  loginToStartPage(): void{
    this.router.navigateByUrl('/start');
  }
  loginToRegisterPage(): void{
    this.router.navigateByUrl('/register');
  }
}
