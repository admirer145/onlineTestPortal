import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomFormValidations} from '../custom-form-validations';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  userDetails;
  constructor(public router: Router) {
    // this.userDetails = {
    //   name : '',
    //   emailid : '',
    //   password : '',
    //   age : ''
    // };
  }

  ngOnInit(): void {
    this.userDetails = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, CustomFormValidations.emailValidation]),
      password: new FormControl('', [Validators.required, CustomFormValidations.passwordValidation, Validators.minLength(6)]),
      age: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      college: new FormControl('', Validators.required),
      cgpa: new FormControl('', Validators.required),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        zipcode: new FormControl('', Validators.required)
      })
    });
  }
  submitEventHandler(): void{
    alert('Registration Successful');
    this.router.navigateByUrl('/login');
  }
}
