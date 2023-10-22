import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
@Input() inputdata:any;
@Output() outdata=new EventEmitter()
  form!: FormGroup;
  name: string = "keerthana";
  isVisible: boolean| any = false;
  color = "redd"
  jsonval = { moo: 'foo', goo: { too: 'new' }};
  date = new Date()
 sampledata = [
  {name:"A"},
  {name:"A"}
 ]

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { debugger
    this.form=this.fb.group({
      name: ['']
    })
    console.log(this.form.value)
  }
onClick() {
  console.log(this.form.value)
}
onclick() {
  console.log(this.form.value)
  this.outdata.emit(this.color);
}
}
