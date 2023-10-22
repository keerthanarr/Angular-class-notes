import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  isValue:boolean = false;
  name:string = "keerthana";
  color: string = "yellow"

  students = [
    {name: "agalya", gender: "f"},
    {name: "chandru", gender: "M"},
    {name: "shruthi", gender: "f"},
    {name: "lurudh", gender: "m"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
