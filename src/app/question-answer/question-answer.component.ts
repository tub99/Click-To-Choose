import { Component, OnInit } from '@angular/core';
import {DataHandler} from './../data-handler.service';
@Component({
  selector: 'app-question-answer',
  providers: [DataHandler],
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss']
})
export class QuestionAnswerComponent implements OnInit {

  qAnsData: Object;

  constructor(private dataSvc : DataHandler) { }

  ngOnInit() {
    console.log('Helllo ......');
    this.dataSvc.getData()
      .subscribe(data =>{
        debugger;
        this.qAnsData = data;
      });

  }

}
