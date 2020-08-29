import { Component, OnInit } from '@angular/core';
import {ManageQuestionsService} from '../manage-questions.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {
  finalResult: number;
  constructor(public manageQuestionsService: ManageQuestionsService, public router: Router) {
    this.finalResult = manageQuestionsService.calculateResult();
  }

  ngOnInit(): void {
  }
  showFinalAnswers(): void{
    this.manageQuestionsService.showAnswers = true;
    this.router.navigateByUrl('/test/1');
  }
}
