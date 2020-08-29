import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Questions} from '../questions';
import {ManageQuestionsService} from '../manage-questions.service';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {
  questionArray: Array<Questions>;
  currentQuestionNumber: number;
  currentRadioSelected: number;
  showAnswers: boolean;
  constructor(public activatedRoute: ActivatedRoute, public router: Router, public manageQuestionsService: ManageQuestionsService) {
     this.questionArray = manageQuestionsService.getAllQuestions();
     this.showAnswers = manageQuestionsService.showAnswers;
  }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    this.currentQuestionNumber = parseInt(this.activatedRoute.snapshot.params.questionNumber);
    if (!this.showAnswers){
      this.currentRadioSelected = -1;
    }
  }
  nextQuestionEventHandler(): void {
    if (!this.showAnswers){
      this.manageQuestionsService.saveAnswers(this.currentQuestionNumber, this.currentRadioSelected);
    }
    console.log(`Current selected is ${this.currentRadioSelected}`);
    this.currentQuestionNumber = 1 + parseInt(this.activatedRoute.snapshot.params.questionNumber);
    this.currentRadioSelected = this.manageQuestionsService.getOptionByQuestionId(this.currentQuestionNumber);
    this.router.navigateByUrl('/test/' + this.currentQuestionNumber);
  }
  prevQuestionEventHandler(): void {
    console.log(`Current selected is ${this.currentRadioSelected}`);
    this.currentQuestionNumber =  parseInt(this.activatedRoute.snapshot.params.questionNumber) - 1;
    this.currentRadioSelected = this.manageQuestionsService.getOptionByQuestionId(this.currentQuestionNumber);
    this.router.navigateByUrl('/test/' + this.currentQuestionNumber);
  }
  submitEventHandler(): void {
    this.manageQuestionsService.saveAnswers(this.currentQuestionNumber, this.currentRadioSelected);
    this.router.navigateByUrl('/result');
  }
  onClickRadioButton(radioIndex: number): void{
      this.currentRadioSelected = radioIndex;
  }
}
