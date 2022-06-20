import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

  public barChartLabels = ['1 месяц', '2-3 месяц', '4-12 месяц', 'от года'];
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData = [
    { data: [ 100, 80, 65, 25], label: 'Милота', stack: 'a' },
    { data: [ 0, 5, 10, 50 ], label: 'Грация', stack: 'a' },
    { data: [ 0, 15, 25, 25 ], label: 'Опасность', stack: 'a' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
