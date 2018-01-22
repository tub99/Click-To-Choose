import { Component, OnInit, Input, Output, EventEmitter, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { EventManager } from './../services/eventManager/eventManager.service';
import { Option } from './../models/option';
import { config } from './../config/config';
@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  @Input() option: Option;
  @Output()
  isOptionClicked: EventEmitter<String> = new EventEmitter();
  @ViewChild('answerInput') answerInput;
  constructor(private renderer: Renderer2,
    private el: ElementRef,
    private eventManager: EventManager) {

    eventManager.on('check-answers', (event) => {
      if (this.option.isAnswered && this.option.isCorrect) {
        this.renderer.addClass(this.answerInput.nativeElement, 'correct-answer');
      } else if (this.option.isAnswered && !this.option.isCorrect) {
        this.renderer.addClass(this.answerInput.nativeElement, 'wrong-answer')
      }
      console.log('hello', event.data);
    });
  }

  ngOnInit() {
    console.log('onInit');
  }

  // ngOnChanges(changes) {
  //   this.option = changes.option.option;
  // }

  isCorrect(option) {
    option.isAnswered = true;
    this.isOptionClicked.emit(option);

    //this.eventManager.broadcast('enable-check');

  }
}
