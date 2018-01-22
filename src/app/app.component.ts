import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'app';
  constructor() {
console.log('constructor fired');
  }
  ngOnInit() {
    console.log('On Init');
  }
  ngOnChanges() {
    console.log('Changes fired');
  }

}
