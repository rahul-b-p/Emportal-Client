import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = ""
  password: string = ""

  constructor (private api:ApiService, private router:Router) {}

  login(){

    
    if(!this.email || !this.password){
      Swal.fire({
        title: "Oops!",
        text: "Please fill the form completely!",
        icon: "info"
      });
    }
    else{
      this.api.loginApi().subscribe({
        next:(res:any)=>{
          // console.log(res);
          const {empMail, password} =res
          if(empMail== this.email && password == this.password){
            Swal.fire({
              title:'Wow!',
              text:'Login SuccessFul!',
              icon:'success'
            })
            this.router.navigateByUrl('/dashboard')
          }
          else{
            Swal.fire({
              title:'Oops!',
              text:"Invalid Credentials !",
              icon:'error'
            })
          }
        },
        error:(err:any)=>{
          // console.log(err);
          Swal.fire({
            title:'Oops!',
            text:"Something went wrong!",
            icon:'error'
          }) 
        }
      })
    }
  }
}
