import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ApiService } from '../service/api.service';
import { EmployeeeModel } from 'src/employee.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selected: Date = new Date()
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions = {}

  total:number=0

  empDetails:EmployeeeModel={} 

  constructor(private api:ApiService) {
    this.chartOptions = {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Project Completion Report'
      },
      tooltip: {
        valueSuffix: '%'
      },
      plotOptions: {
        series: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: [{
            enabled: true,
            distance: 20
          }, {
            enabled: true,
            distance: -40,
            format: '{point.percentage:.1f}%',
            style: {
              fontSize: '1.2em',
              textOutline: 'none',
              opacity: 0.7
            },
            filter: {
              operator: '>',
              property: 'percentage',
              value: 10
            }
          }]
        }
      },
      credits:{
        enabled: false
      },
      series: [
        {
          name: 'Project',
          colorByPoint: true,
          data: [
            {
              name: 'safari',
              y: 55.02
            },
            {
              name: 'chrome',
              // sliced: true,
              // selected: true,
              y: 26.71
            },
            {
              name: 'firefox',
              y: 1.09
            },
            {
              name: 'edge',
              y: 15.5
            },
            {
              name: 'opera',
              y: 1.68
            }
          ]
        }
      ]
    }
  }

  ngOnInit(): void {
    this.api.getAllEmployeeApi().subscribe({
      next:(res:any)=>{
        this.total=res.length-1
      },
      error:(err:any)=>{
        console.log(err);
      }
    })

    this.api.loginApi().subscribe({
      next:(res:any)=>{
        this.empDetails=res
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }
}
