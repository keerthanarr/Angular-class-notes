import { FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  studentdetails: any = [];
  login: any;
  editid: any

  constructor(private service: CrudService, private fb: FormBuilder) { }

  ngOnInit(): void { debugger
    this.login = this.fb.group({
      name: [''],
      password: ['']
    })


    this.service.getData().subscribe((response) => {
      console.log(response)
     this.studentdetails = response;
    })

  }
  onLogin() {
 debugger
  let data = this.login.value;
  this.service.postData(data).subscribe((res: any)=> {

  })
}

delete(id: any) {
  this.service.deleteData(id).subscribe((res: any)=> {
  })
}

edit(id: any) {
  this.editid = id;
  this.service.editData(id).subscribe((res: any)=> {
   this.login.patchValue( {
    name: res.name,
    password: res.password
   })

  })

}
  update() { debugger
  let data = this.login.value;
  let id = this.editid;
  this.service.updateData(id, data).subscribe((res: any)=> {

  })
  }
}
