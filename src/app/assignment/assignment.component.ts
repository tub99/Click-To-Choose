import { Component, OnInit, Output, EventEmitter, Renderer2, ElementRef } from '@angular/core';
import { AssignmentService } from './../services/assignment/assignment.service';
import { Assignment } from './../models/assignment';
import { Question } from './../models/question';
import { Option } from './../models/option';
import { config } from './../config/config';

@Component({
  selector: 'app-assignment',
  providers: [AssignmentService],
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  assignmentData: Assignment = new Assignment(null);
  assignmentName: string;
  assignmentQuestions: Array<Question>;
  currentQuestion: Question;
  currentQuestionIndex: number = 0;
  isFirstQuestion: Boolean = true;
  isLastQuestion: Boolean = false;
  options: Array<Option>;
  hasOptionBeenClicked: Boolean = false;

  constructor(private assignemntSvc: AssignmentService, private renderer: Renderer2, private el: ElementRef) {
    console.log('constructor fired');
  }

  ngOnChanges() {
    console.log('Changes fired');
  }

  ngOnInit() {
    console.log('On Init');
    this.assignemntSvc.getAssignmentAccToType(config.DATA.URl, config.ASSIGNMENT_TYPE.SUBJECT_PREDICATE)
      .subscribe(data => {
        this.assignmentData = data;
        this.assignmentQuestions = data.questions
        this.assignmentName = data.name;
        this.currentQuestion = data.questions[this.currentQuestionIndex];
        this.options = this.currentQuestion.options;
      },
      err => {
        alert(err);
      });
  }
  isOptionClicked(option) {
    this.hasOptionBeenClicked = (option.toExecute) ? true : false;
  }

  onNextQuestionClick() {
    if (this.currentQuestionIndex < this.assignmentQuestions.length - 1) {
      if (this.isFirstQuestion) this.isFirstQuestion = false;
      this.currentQuestion = this.assignmentData.questions[++this.currentQuestionIndex];
      this.isLastQuestion = (this.currentQuestionIndex === this.assignmentQuestions.length - 1) ? true : false;
    }
    this.hasOptionBeenClicked = false;
  }
  onPrevQuestionClick() {
    if (this.currentQuestionIndex > 0) {
      if (this.isLastQuestion) this.isLastQuestion = false;
      this.currentQuestion = this.assignmentData.questions[--this.currentQuestionIndex];
      this.isFirstQuestion = (this.currentQuestionIndex === 0) ? true : false;
    }
  }

}
