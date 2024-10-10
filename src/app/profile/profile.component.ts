import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ApiService } from '../service/api.service';
import { EmployeeeModel } from 'src/employee.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isClicked:boolean = false

  empDetails:EmployeeeModel={}

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.loginApi().subscribe({
      next:(res:any)=>{
        this.empDetails=res
        console.log(this.empDetails);
        
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }


  clickBtn(){
    this.isClicked=true
    
    
  }

  Cancel(){
    this.isClicked=false
  }
}
