import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ManageQuestionsService} from '../manage-questions.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {
  startPageData: object;
  constructor(public router: Router, public manageQuestionsService: ManageQuestionsService) {
    this.startPageData = manageQuestionsService.getStartPageData();
  }

  ngOnInit(): void {
  }
  startToTestPage(): void{
    this.router.navigateByUrl('/test/' + 1);
  }
}
