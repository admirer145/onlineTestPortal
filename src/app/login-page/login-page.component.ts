import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, PatternValidator, Validators} from '@angular/forms';
import {ManageQuestionsService} from '../manage-questions.service';
import {CustomFormValidations} from '../custom-form-validations'
import {TalkWithDbService} from "../talk-with-db.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm;
  userValidationFailMessage:string;
  userValidationFailFlag:boolean;
  constructor(public router: Router, public manageQuestionsServive: ManageQuestionsService, public talkWithDbService:TalkWithDbService) {
    manageQuestionsServive.resetUserData();
    this.userValidationFailFlag = false;
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, CustomFormValidations.emailValidation]),
      password: new FormControl('', [Validators.required, CustomFormValidations.passwordValidation, Validators.minLength(8)])
    });
  }

  loginToStartPage(): void{
    var user = {
      username:this.loginForm.value.email,
      password:this.loginForm.value.password
    };
    this.talkWithDbService
        .doUserValidation(user)
        .subscribe((data)=>{
          console.log(data);
          if(data["message"] == true){
            this.router.navigateByUrl('/start');
          }else{
            this.userValidationFailFlag = true;
            this.userValidationFailMessage = "Please enter the correct email and password";
            // this.router.navigateByUrl('/start');
          }
        },(err)=>{
          console.log(err);
        });
    
  }
  loginToRegisterPage(): void{
    this.router.navigateByUrl('/register');
  }
}
