import { Injectable } from '@angular/core';
import {Questions} from './questions';
import {TalkWithDbService} from './talk-with-db.service';
@Injectable()

export class ManageQuestionsService {
  private questionArray;
  userAnswers: Array<number> = new Array();
  showAnswers: boolean;
  private userTotalAttempted: number;
  private userTotalCorrect: number;
  private startPageData: object;
  constructor(public talkWithDbService: TalkWithDbService) {
    this.showAnswers = false;
    this.userTotalCorrect = 0;
    this.userTotalAttempted = 0;
    this.startPageData = {
      totalQuestions: '15',
      totalDurationInMin: '15',
      marksPerQuestion: '4',
      negativeMarksPerQuestion: '-1',
    };

    this.talkWithDbService
    .getAllQuestions()
    .subscribe((data)=>{
      console.log(data);
      this.questionArray = data as Questions[];
    },(err)=>{
      console.log(err);
    });
  }
  getAllQuestions(): Array<Questions> {
    return this.questionArray;
  }
  getQuestionById(questionId: number): Questions {
    if ( questionId > this.questionArray.length || questionId < 1 ){
      return null;
    }
    return this.questionArray[questionId - 1];
  }
  getResultByQuestionId(questionId: number): number{
    if ( questionId > this.questionArray.length || questionId < 1 ){
      return -1;
    }
    return this.questionArray[questionId - 1].answer;
  }
  calculateResult(): number{
    let res = 0;
    for (let i = 0 ; i < this.questionArray.length; i++){
      if (this.userAnswers[i]) {
        if (this.questionArray[i].answer === this.userAnswers[i]) {
          res += parseInt(this.startPageData['marksPerQuestion']);
          this.userTotalCorrect += 1;
        }else{
          res += parseInt(this.startPageData['negativeMarksPerQuestion']);
        }
        this.userTotalAttempted += 1;
      }
    }
    return res;
  }
  saveAnswers(questionId: number, optionId: number): void{
    if ( questionId > this.questionArray.length || questionId < 1 ){
      return ;
    }
    this.userAnswers[questionId - 1] = optionId + 1;
  }
  getOptionByQuestionId(questionId: number): number {
    if ( questionId > this.questionArray.length || questionId < 1 ){
      return -1;
    }
    if (this.userAnswers[questionId - 1] === undefined){
      return -1;
    }
    return this.userAnswers[questionId - 1] - 1;
  }
  getTotalCorrect(): number{
    return this.userTotalCorrect;
  }
  getTotalAttempted(): number{
    return this.userTotalAttempted;
  }
  getStartPageData(): object{
    return this.startPageData;
  }
  resetUserData(): void{
    this.showAnswers = false;
    this.userTotalCorrect = 0;
    this.userTotalAttempted = 0;
    this.userAnswers = new Array<number>();
  }
}
