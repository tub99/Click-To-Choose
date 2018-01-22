import { Component, OnInit, EventEmitter, Output, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Output() onNext = new EventEmitter<void>();
  @Output() onPrev = new EventEmitter<void>();
  @Input() isFirstQ: Boolean;
  @Input() isLastQ: Boolean;
  @Input() currQNo: Number;
  @Input() noOfQuestions: Number;

  constructor() { }

  ngOnInit() {

  }
  ngOnChanges(changes) {
    if (changes.isFirstQ) this.isFirstQ = changes.isFirstQ.currentValue;
    if (changes.isLastQ) this.isLastQ = changes.isLastQ.currentValue;

  }

  OnNextButtonClick() {
    this.onNext.emit();
  }

  OnPrevButtonClick() {
    this.onPrev.emit();
  }
}
