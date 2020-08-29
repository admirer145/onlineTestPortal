import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {StartPageComponent} from './start-page/start-page.component';
import {TestPageComponent} from './test-page/test-page.component';
import {ResultPageComponent} from './result-page/result-page.component';
import {RegisterPageComponent} from './register-page/register-page.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'start', component: StartPageComponent},
  {path: 'test/:questionNumber', component: TestPageComponent},
  {path: 'result', component: ResultPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
