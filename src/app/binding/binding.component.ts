import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

 name: string = "shruthi";
 isVisible: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
   console.log("Event trigged")
  }
}
