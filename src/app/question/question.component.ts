import { Component, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { Question } from './../models/question';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnChanges {
  @Input() currQuestion: Question;
  constructor() {
    console.log('Q constructor fired');
  }

  ngOnInit() {
    console.log('Question onitt fired');
  }
  ngOnChanges(changes) {
    this.currQuestion = changes.currQuestion.currentValue;
  }

}
