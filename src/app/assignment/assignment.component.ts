import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  constructor(private assignemntSvc: AssignmentService) { }

  ngOnInit() {
    this.assignemntSvc.getAssignmentAccToType(config.DATA.URl, config.ASSIGNMENT_TYPE.SUBJECT_PREDICATE)
      .subscribe(data => {
        this.assignmentData = data;
        this.assignmentQuestions = data.questions
        this.assignmentName = data.name;
        this.currentQuestion = data.questions[this.currentQuestionIndex]
      },
      err => {
        alert(err);
      });
  }
  isOptionClicked(option) {
    alert(option.isCorrect === true)
  }

}
