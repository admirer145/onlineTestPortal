import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { StartPageComponent } from './start-page/start-page.component';
import { TestPageComponent } from './test-page/test-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ResultPageComponent } from './result-page/result-page.component';
import {ManageQuestionsService} from './manage-questions.service';
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    StartPageComponent,
    TestPageComponent,
    ResultPageComponent,
    RegisterPageComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [ManageQuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
