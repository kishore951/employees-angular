import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }

  fetchData=()=>{
    this.myapi.viewEmployee().subscribe(
      (data)=>{
        this.viewEmployee=data
      }
    )
  }
  deleteEmployee=(id:any)=>{
    let data ={
      "id":id
    }
    this.myapi.deleteEmployee(data).subscribe(
      (resp)=>{
        alert("deleted")
      }
    )
    this.fetchData()
  }

  viewEmployee:any=[
]

  ngOnInit(): void {
  }

}
