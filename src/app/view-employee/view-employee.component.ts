import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  constructor() { }

  viewEmployee=[
    {
        "id": 1,
        "employeeCode": 111,
        "name": "vignesh",
        "address": "kochi",
        "salary": 20000,
        "company": "Nest",
        "dateOfJoining": "12/9/2020",
        "experiance": 3,
        "designation": "hr",
        "dob": "23/08/1999"
    },
    {
        "id": 2,
        "employeeCode": 112,
        "name": "mukesh",
        "address": "kochi",
        "salary": 20000,
        "company": "Nest",
        "dateOfJoining": "22/9/2020",
        "experiance": 3,
        "designation": "hr",
        "dob": "23/09/1999"
    },
    {
        "id": 3,
        "employeeCode": 113,
        "name": "praveen",
        "address": "chennai",
        "salary": 25000,
        "company": "Nest",
        "dateOfJoining": "22/9/2019",
        "experiance": 4,
        "designation": "manager",
        "dob": "23/09/1995"
    },
    {
        "id": 4,
        "employeeCode": 114,
        "name": "suganth",
        "address": "coimbatore",
        "salary": 25000,
        "company": "Nest",
        "dateOfJoining": "22/9/2019",
        "experiance": 4,
        "designation": "tl",
        "dob": "23/09/1998"
    }
]

  ngOnInit(): void {
  }

}
