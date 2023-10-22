import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  Framework:string = "Angular"
  date = new Date();
  data: any ={ id: "12a"}
  constructor() { }

  ngOnInit(): void {
  }

}
