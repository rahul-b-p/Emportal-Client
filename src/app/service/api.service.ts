import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serverUrl:string = 'http://localhost:4000'
  
  constructor(private http:HttpClient) { }

  loginApi(){
    return this.http.get(`${this.serverUrl}/employee/1`)
  }

  addEmployeeApi(reqBoady:any){
    return this.http.post(`${this.serverUrl}/employee`,reqBoady)
  }

  getAllEmployeeApi(){
    return this.http.get(`${this.serverUrl}/employee`)
  }

  deleteEmployeeApi(id:any){
    return this.http.delete(`${this.serverUrl}/employee/${id}`)
  }

  getSelectedEmployeeApi(id:any){
    return this.http.get(`${this.serverUrl}/employee/${id}`)
  }

  editEmployeeApi(id:any,reqBoady:any){
    return this.http.put(`${this.serverUrl}/employee/${id}`,reqBoady)
  }
}