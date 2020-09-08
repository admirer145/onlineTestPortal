import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TalkWithDbService {
  myBaseServiceUrl = environment.serverUrl;
  constructor(public httpClient:HttpClient) { }

  doUserValidation(obj){
    var myServerUrl = this.myBaseServiceUrl + "api/login";
    return this.httpClient.post(myServerUrl, obj);
  }
  getAllQuestions(){
    var myServerUrl = this.myBaseServiceUrl + "api/question";
    return this.httpClient.get(myServerUrl); 
  }
}

