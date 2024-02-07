import { Component } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts'; // Import the base chart directive
import { ChartData } from 'chart.js'; 




@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  public barChartType: ChartType = 'bar';
  public barChartLegend: boolean = true;

 public barChartData: ChartData<'bar'> = {
  labels: this.barChartLabels,
  datasets: [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Weekly Uploads'
    }
  ]
};


  constructor() { }
}
