import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
  answer: string;
  constructor() { }

  ngOnInit() {
    // get the answers array populated
    this.answer = 'hi';
  }

}
