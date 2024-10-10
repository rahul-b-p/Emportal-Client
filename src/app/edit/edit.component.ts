import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { EmployeeeModel } from 'src/employee.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

 

  selectedEmployee:EmployeeeModel={}
  constructor(private Aroute:ActivatedRoute, private api:ApiService, private router:Router){}

  ngOnInit(): void {
    this.Aroute.params.subscribe((res:any)=>{
      const {id} = res
      this.getEmployee(id)      
    })   
  }

  getEmployee(id:any){
    this.api.getSelectedEmployeeApi(id).subscribe({
      next:(res:any)=>{
        // console.log(res);
        this.selectedEmployee=res
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }

  cancel(id:any){
    this.getEmployee(id)
  }

  editEmployee(){
    const reqBoady:any=this.selectedEmployee
    const id:any=this.selectedEmployee.id
    this.api.editEmployeeApi(id,reqBoady).subscribe({
      next:(res:any)=>{
        // console.log(res);
        Swal.fire({
          title:"Great!",
          text:'Edits are updated successfully',
          icon:'success'
        })
        this.router.navigateByUrl('/employee')
      },
      error:(err:any)=>{
        console.log(err);
        Swal.fire({
          title:"Oops!",
          text:'Something went wrong',
          icon:'error'
        })
      }
    })
  }

}
