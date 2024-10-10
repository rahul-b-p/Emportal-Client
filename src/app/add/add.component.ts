import { Component } from '@angular/core';
import { EmployeeeModel } from 'src/employee.model';
import Swal from 'sweetalert2';
import { ApiService } from '../service/api.service';
import { error } from 'highcharts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  employeeDetails:EmployeeeModel={}

  constructor(private api:ApiService, private router:Router){}

  cancel(){
    this.employeeDetails={}
  }

  addEmployee(){
    this.api.addEmployeeApi(this.employeeDetails).subscribe({
      next:(res:any)=>{
        console.log(res);
        Swal.fire({
          title:'Wow!',
          text:'Employee added succesfully!',
          icon:'success'
        })
      },
      error:(err:any)=>{
        console.log(err);
        Swal.fire({
          title:'Oops!',
          text:'Something went wrong!',
          icon:'error'
        })
      }
    })
    this.cancel()
    this.router.navigateByUrl('/employee')
  }
}
