import { Component, OnInit } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.scss']
})
export class DashboardComponentComponent implements OnInit {

  constructor() { }

  // tslint:disable-next-line:member-ordering
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  // tslint:disable-next-line:member-ordering
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  // tslint:disable-next-line:member-ordering
  public barChartType = 'line';
  // tslint:disable-next-line:member-ordering
  public barChartLegend = true;
  // tslint:disable-next-line:member-ordering
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  // tslint:disable-next-line:member-ordering
  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  // tslint:disable-next-line:member-ordering
  public doughnutChartData = [120, 150, 180, 90];
  // tslint:disable-next-line:member-ordering
  public doughnutChartType = 'doughnut';


  // tslint:disable-next-line:member-ordering
  public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  // tslint:disable-next-line:member-ordering
  public radarChartData = [
    {data: [120, 130, 180, 70], label: '2017'},
    {data: [90, 150, 200, 45], label: '2018'}
  ];
  // tslint:disable-next-line:member-ordering
  public radarChartType = 'radar';

  // tslint:disable-next-line:member-ordering
  public bubbleChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{ ticks: { min: 0, max: 30, } }],
      yAxes: [{ ticks: { min: 0, max: 30, } }]
    }
  };
  // tslint:disable-next-line:member-ordering
  public bubbleChartType = 'bubble';
  // tslint:disable-next-line:member-ordering
  public bubbleChartLegend = true;

  public bubbleChartData = [
    {
      data: [
        { x: 10, y: 10, r: 10 },
        { x: 15, y: 5, r: 15 },
        { x: 26, y: 12, r: 23 },
        { x: 7, y: 8, r: 8 },
      ],
      label: 'Series A',
    },
  ];

  ngOnInit() {}



}
