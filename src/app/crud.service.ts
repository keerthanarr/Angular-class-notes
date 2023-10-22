import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private url: string =  "http://localhost:3000/studentdetails";

  constructor(private http: HttpClient) { }

  getData() {
  return this.http.get(this.url);
  }
  postData(data: any) {
    return this.http.post(this.url,data);
  }
  deleteData(id: any) {
    return this.http.delete(this.url + "/" +id);
  }
  editData(id: any) {
    return this.http.get(this.url + "/" +id);
  }
  updateData(id: any,data: any) {
    return this.http.put(this.url + "/" +id, data);
  }
}
