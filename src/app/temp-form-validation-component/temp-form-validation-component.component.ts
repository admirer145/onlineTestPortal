import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-form-validation-component',
  templateUrl: './temp-form-validation-component.component.html',
  styleUrls: ['./temp-form-validation-component.component.css']
})
export class TempFormValidationComponentComponent implements OnInit {
  userDetails;
  constructor() {
    this.userDetails = {
      username : '',
      password : '',
      emailid : '',
      age : ''
    };
  }

  ngOnInit(): void {
  }
  submitEventHandler(): void{
    console.log('Submitted the form');
  }

}
