import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { EmployeeeModel } from 'src/employee.model';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  allEmployee:EmployeeeModel[]=[]

  time:any = new Date()

  searchKey:string=""

  p:number=1;

  constructor(private router:Router, private api:ApiService){
  }

  ngOnInit(): void {
    this.getEmployee()    
  }

  add(){
    this.router.navigateByUrl('/add-employee')
  }

  getEmployee(){
    this.api.getAllEmployeeApi().subscribe({
      next:(res:any)=>{
        // console.log(res);
        this.allEmployee=res
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }

  sortById(){
    this.allEmployee.sort((a:any,b:any)=>a.id-b.id)
  }

  sortByName(){
    this.allEmployee.sort((a:any,b:any)=>a.empUsername.localeCompare(b.empUsername))
  }

  removeEmployee(id:any){
    this.api.deleteEmployeeApi(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.getEmployee()
      },
      error:(err:any)=>{
        console.log(err);       
      }
    })
  }

  generatePdf(){
    // 1) create an object forjsPDF
    const pdf =new jsPDF()

    const body:any=[]

    this.allEmployee.forEach((item:any)=>{
      if(item.id!=1){
        if(item.empStatus=='active'){
          body.push([item.id, item.empUsername, item.empMail, 'Active'])
        }
        else{
          body.push([item.id, item.empUsername, item.empMail, 'Inactive'])
        }
      }
    })

    let head= [['Id','Username', 'Email', 'Status']]

    // fontsize
    pdf.setFontSize(16)

    // heading
    pdf.text('Employee List',10,10)

    // open on next window
    // pdf.output()

    // 2) call auto table function
    autoTable(pdf,{head,body})

    // 3)to save pdf
    pdf.save('Employee_Table')
  }

}
