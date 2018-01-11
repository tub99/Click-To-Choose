import { Component, OnInit, Input,  Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
   @Input() option: string;
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    this.option = changes.currQuestion.option;
  }

}
