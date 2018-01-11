import { Component, OnInit, Input, Output, EventEmitter, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
  @Input() option: string;
  @Output()
  isOptionClicked: EventEmitter<String> = new EventEmitter<String>();
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
  }

  // ngOnChanges(changes) {
  //   this.option = changes.option.option;
  // }

  isCorrect(event, option) {
    this.isOptionClicked.emit(option)
  }
}
