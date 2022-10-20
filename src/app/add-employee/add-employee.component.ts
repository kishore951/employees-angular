import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  employeeCode=""
  name=""
  address=""
  salary=""
  company=""
  dateOfJoining=""
  experience=""
  designation=""
  dob=""

  readValues=()=>{
let data ={
"employeeCode":this.employeeCode,
"name":this.name,
"address":this.address,
"salary":this.salary,
"company":this.company,
"dateOfJoining":this.dateOfJoining,
"experience":this.experience,
"designation":this.designation,
"dob":this.dob
}
console.log(data)
this.myapi.addEmployee(data).subscribe(
  (data)=>{
    alert("successfully added")
  }
)

  }



  ngOnInit(): void {
  }

}
