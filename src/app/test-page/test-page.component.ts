import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Questions} from '../questions';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {
  questionArray: Questions[] = new Array();
  userAnswerArray: number[] = new Array();
  currentQuestionNumber: number;
  currentRadioSelected: number;

  constructor(public activatedRoute: ActivatedRoute, public router: Router) {
    this.questionArray.push(new Questions(1, [' Denoted by triple quotes for providing the specification of certain program elements ', ' Design and implementation of specific functionality to be incorporated into a program ', ' Defines the specification of how it is to be used ', ' Any program that reuses code '], ' Which of these definitions correctly describes a module? ', 2));

    this.questionArray.push(new Questions(2, [' Provides a means of reuse of program code ', ' Provides a means of dividing up tasks ', ' Provides a means of reducing the size of the program ', ' Provides a means of testing individual parts of the program '], ' Which of the following is not an advantage of using modules? ', 3));

    this.questionArray.push(new Questions(3, [' Client ', ' Docstring ', ' Interface ', ' Modularity '], ' Program code making use of a given module is called a ______ of the module  ', 1));

    this.questionArray.push(new Questions(4, [' Interface ', ' Modularity ', ' Client ', ' Docstring '], ' ______ is a string literal denoted by triple quotes for providing the specifications of certain program elements  ', 4));

    this.questionArray.push(new Questions(5, [' The details of a program design are addressed before the overall design ', ' Only the details of the program are addressed ', ' The overall design of the program is addressed before the details ', ' Only the design of the program is addressed '], ' Which of the following is true about top-down design process? ', 3));

    this.questionArray.push(new Questions(6, [' When a python file is directly executed, it is considered main module of a program ', ' Main modules may import any number of modules ', ' Special name given to main modules is: __main__ ', ' Other main modules can import main modules '], ' Which of the following isn’t true about main modules? ', 4));

    this.questionArray.push(new Questions(7, [' Global namespace ', ' Public namespace ', ' Built-in namespace ', ' Local namespace '], ' Which of the following is not a valid namespace? ', 2));

    this.questionArray.push(new Questions(8, [' The namespace of imported module becomes part of importing module ', ' This form of import prevents name clash ', ' The namespace of imported module becomes available to importing module ', ' The identifiers in module are accessed as: modulename.identifier '], ' Which of the following is false about “import modulename” form of import? ', 1));

    this.questionArray.push(new Questions(9, [' The syntax is: from modulename import identifier ', ' This form of import prevents name clash ', ' The namespace of imported module becomes part of importing module ', ' The identifiers in module are accessed directly as: identifier '], ' Which of the following is false about “from-import” form of import? ', 2));

    this.questionArray.push(new Questions(10, [' In the “from-import” form of import, identifiers beginning with two underscores are private and aren’t imported ', ' dir(  built-in function monitors the items in the namespace of the main module ', ' In the “from-import” form of import, all identifiers regardless of whether they are private or public are imported ', ' When a module is loaded, a compiled version of the module with file extension .pyc is automatically produced '], ' Which of the statements about modules is false? ', 3));

    this.questionArray.push(new Questions(11, [' Python first searches the global namespace, then the local namespace and finally the built-in namespace ', ' Python first searches the local namespace, then the global namespace and finally the built-in namespace ', ' Python first searches the built-in namespace, then the global namespace and finally the local namespace ', ' Python first searches the built-in namespace, then the local namespace and finally the global namespace '], ' What is the order of namespaces in which Python looks for an identifier? ', 2));

    this.questionArray.push(new Questions(12, [' + ', ' // ', ' % ', ' ** '], ' Which of the following operators has its associativity from right to left? ', 4));

    this.questionArray.push(new Questions(13, [' list1 = list(  ', ' list1 = [] ', ' list1 = list([1, 2, 3]  ', ' all of the mentioned '], ' Which of the following commands will create a list? ', 4));

    this.questionArray.push(new Questions(14, [' [‘h’, ‘e’, ‘l’, ‘l’, ‘o’] ', ' [‘hello’] ', ' [‘llo’] ', ' [‘olleh’] '], ' What is the output when we execute list(“hello”)? ', 1));

    this.questionArray.push(new Questions(15, [' 2445 ', ' 133 ', ' 12454 ', ' 123 '], ' Suppose list1 is [2445,133,12454,123], what is max(list1)? ', 3));
  }

  ngOnInit(): void {
    this.currentQuestionNumber = parseInt(this.activatedRoute.snapshot.params.questionNumber);
    this.currentRadioSelected = -1;
    if (this.currentQuestionNumber > 1){
      this.currentQuestionNumber = 1;
      this.router.navigateByUrl('/test/' + 1);
    }
  }

  nextQuestionEventHandler(): void {
    this.userAnswerArray.push(this.currentRadioSelected);
    console.log(`Current selected is ${this.currentRadioSelected}`);
    this.currentRadioSelected = -1;
    this.currentQuestionNumber = 1 + parseInt(this.activatedRoute.snapshot.params.questionNumber);
    this.router.navigateByUrl('/test/' + this.currentQuestionNumber);
  }

  submitEventHandler(): void {
    let result = 0;
    for (let i = 0; i < this.userAnswerArray.length; i++){
      if (this.userAnswerArray[i] === this.questionArray[i].answer){
        result++;
      }
    }
    console.log(result);
    this.router.navigateByUrl('/result', {state : [result]});
  }
  onClickRadioButton(radioIndex: number): void{
    this.currentRadioSelected = radioIndex;
  }

  // changeRadioEventHandler(checkedIndex: number){
  //   this.currentRadioSelected = checkedIndex;
  // }
}
