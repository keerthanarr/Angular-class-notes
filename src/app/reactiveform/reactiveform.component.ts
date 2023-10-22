import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  editid: any
  names: any[] =[];
  login: FormGroup | any;

  constructor(private fb: FormBuilder, private service: StudentsService) { }

  ngOnInit(): void {
this.service.getnames().subscribe((res: any) => {
  console.log(res);
  this.names = res;
})

    this.login = this.fb.group({
      name: [''],
      password: ['']
    })
  }
  onClick(data: any) {
    let value = this.login.value
    this.service.postnames(value).subscribe((res: any) => {
      console.log(res);

    })
    console.log(this.login.value);
  }
  delete(id: any) {
    this.service.deletename(id).subscribe((res: any) => {
      console.log(res);

    })
  }
  edit(id: any) { debugger
    this.editid = id;
    this.service.editnames(id).subscribe((res: any) => {
      this.login.patchValue( {
        name: res.name,
        password: res.password
      })

    })
  }
  update() { debugger
    let id = this.editid;
    let data = this.login.value;
    this.service.updatenames(id,data).subscribe((res: any) => {
      console.log(res);
    })
  }
}
