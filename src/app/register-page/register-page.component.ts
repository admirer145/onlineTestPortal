import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  userDetails;
  constructor(public router: Router) {
    this.userDetails = {
      name : '',
      emailid : '',
      password : '',
      age : ''
    };
  }

  ngOnInit(): void {
  }
  submitEventHandler(): void{
    alert('Registration Successful');
    this.router.navigateByUrl('/login');
  }
}
