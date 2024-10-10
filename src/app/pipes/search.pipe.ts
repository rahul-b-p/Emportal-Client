import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // first arguent value to be transformed 
  // second argument - based on which the transformation have to be done -formate
  transform(allEmployee:any[],searchKey:string ): any[] {
    
    const result:any=[]

    if(!allEmployee || searchKey==""){
      return allEmployee
    }

    allEmployee.forEach((item:any)=>{
      if(item.empUsername.trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(item)
      }
    })
    return result
  }

}
