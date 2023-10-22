import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

topic: string = "Outputdecorator"

@Input() inputData: any;
@Output() outputData = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.outputData.emit(this.topic);
  }

}
