import { Component, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { Question } from './../models/question';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnChanges {
  @Input() currQuestion: Question;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes) {
    this.currQuestion = changes.currQuestion.currentValue;
  }

}
