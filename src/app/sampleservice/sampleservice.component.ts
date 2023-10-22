import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-sampleservice',
  templateUrl: './sampleservice.component.html',
  styleUrls: ['./sampleservice.component.css']
})
export class SampleserviceComponent implements OnInit {

  sampledata: any;
  studentList: any[] = []

  constructor(private service :StudentsService) { }

  ngOnInit(): void {
  this.sampledata = this.service.FrameWork;
  //this.studentList = this.service.getnames();
  }

}
