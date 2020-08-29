import { Injectable } from '@angular/core';
import {Questions} from './questions';

@Injectable()

export class ManageQuestionsService {
  private questionArray: Array<Questions> = new Array();
  userAnswers: Array<number> = new Array();
  showAnswers: boolean;
  constructor() {
    this.showAnswers = false;
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
    this.questionArray.push(new Questions(13, [' list1 = list() ', ' list1 = [] ', ' list1 = list([1, 2, 3])  ', ' all of the mentioned '], ' Which of the following commands will create a list? ', 4));
    this.questionArray.push(new Questions(14, [' [‘h’, ‘e’, ‘l’, ‘l’, ‘o’] ', ' [‘hello’] ', ' [‘llo’] ', ' [‘olleh’] '], ' What is the output when we execute list(“hello”)? ', 1));
    this.questionArray.push(new Questions(15, [' 2445 ', ' 133 ', ' 12454 ', ' 123 '], ' Suppose list1 is [2445,133,12454,123], what is max(list1)? ', 3));
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
      if (this.questionArray[i].answer === this.userAnswers[i]) {
        res += 1;
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

}
