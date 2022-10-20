import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""

  readValues=()=>{
    let data ={
      "name":this.name
    }
    console.log(data)
    this.myapi.searchEmployee(data).subscribe(
      (res)=>{
        this.data=res
      }
    )
  }
  data:any=[
    
]

  ngOnInit(): void {
  }

}
