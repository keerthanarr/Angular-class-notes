import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

 Framework: string = "Angular"
 message = '';
  constructor() { }

  ngOnInit(): void {
  }
  emitData($event: any) {
   console.log($event)
   this.message = $event;
  }

}
