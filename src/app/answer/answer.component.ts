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
      if (event.attempt % 2 === 1) {
        this.checkOnFirstAttemt(this.option, this.answerInput.nativeElement)
      } else if (event.attempt % 2 === 0) {
        this.checkOnSecondAttempt(this.option, this.answerInput.nativeElement)
      }
    });
  }
  private checkOnFirstAttemt(option, el) {
    if (this.option.isAnswered && this.option.isCorrect) {
      this.renderer.addClass(el, 'correct-answer');
    } else if (this.option.isAnswered && !this.option.isCorrect) {
      this.renderer.addClass(el, 'wrong-answer')
    }
  }
  private checkOnSecondAttempt(option, el) {
    let answerClass = (option.isCorrect) ? 'correct-answer' : 'wrong-answer';
    this.renderer.addClass(el, answerClass);
    option.toExecute = false;
    this.isOptionClicked.emit(option);

  }

  ngOnInit() {
    console.log('onInit');
  }

  // ngOnChanges(changes) {
  //   this.option = changes.option.option;
  // }

  isCorrect(option) {
    if (!option.isAnswered) {
      option.isAnswered = true;
      option.toExecute = true;
    } else {
      this.renderer.removeClass(this.answerInput.nativeElement, 'correct-answer');
      option.isAnswered = false;
    }

    this.isOptionClicked.emit(option);

    //this.eventManager.broadcast('enable-check');

  }
}
