import { Component, OnInit, OnChanges, Input, Output, EventEmitter, Renderer2, ElementRef } from '@angular/core';
import { Option } from './../models/option';
import { EventManager } from './../services/eventManager/eventManager.service';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css']
})
export class ValidatorComponent implements OnInit, OnChanges {
  @Input() options: Array<Option>;
  @Input() enableCheck: Boolean = false;;
  constructor(private eventManager: EventManager) { }

  ngOnInit() {
  }
  ngOnChanges(changes) {
    this.enableCheck = changes.enableCheck.currentValue[0];
  }
  validateAnswers() {
  }


}
