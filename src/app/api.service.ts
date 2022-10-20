import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewEmployee=()=>{
    return this.http.get("http://localhost:8080/viewemployee")
  }

  addEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/addEmployee",data)
  }
  deleteEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteEmployee",data)
  }
  searchEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/searchEmployee",data)
  }
}
