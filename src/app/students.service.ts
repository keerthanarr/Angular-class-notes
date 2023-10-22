import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
private url:string =" http://localhost:3000/data"
FrameWork: string = "Angular";

  constructor(private http: HttpClient) { }

getnames() {
  // return [
  //   {name: "Agalya", id: 1, rollno: "A1"},
  //   {name: "Chandru", id: 2, rollno: "A2"},
  //   {name: "Lurudh", id: 3, rollno: "A3"}
  // ]
  return this.http.get(this.url);
}
postnames(data: any) {
  return this.http.post(this.url, data);
}
deletename(id: any) {
  return this.http.delete(this.url+"/"+id);
}
editnames(id: any) {
  return this.http.get(this.url+"/"+id);
}
updatenames(id: any,data: any) {
  return this.http.put(this.url+"/"+id,data);
}
}

