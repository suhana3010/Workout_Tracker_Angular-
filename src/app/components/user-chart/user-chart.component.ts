// import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
// import { User } from './WorkoutService'; // adjust path as needed

// @Component({
//   selector: 'app-user-chart',
//   templateUrl: './user-chart.component.html',
//   styleUrls: ['./user-chart.component.scss']
// })
// export class UserChartComponent implements OnInit, OnChanges {
//   @Input() user: User | null = null;

//   chartData: any[] = [];
//   // ngx-charts settings
//   view: any[] = [700, 400];
//   showXAxis = true;
//   showYAxis = true;
//   gradient = false;
//   showLegend = true;
//   showXAxisLabel = true;
//   xAxisLabel = 'Workout Type';
//   showYAxisLabel = true;
//   yAxisLabel = 'Total Minutes';

//   colorScheme = {
//     domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
//   };

//   constructor() { }

//   ngOnInit(): void {
//     this.processChartData();
//   }

//   ngOnChanges(changes: SimpleChanges): void {
//     if (changes.user) {
//       this.processChartData();
//     }
//   }

//   processChartData() {
//     if (!this.user) {
//       this.chartData = [];
//       return;
//     }
//     const dataMap = new Map<string, number>();
//     // Sum minutes per workout type
//     this.user.workouts.forEach(workout => {
//       const current = dataMap.get(workout.type) || 0;
//       dataMap.set(workout.type, current + workout.minutes);
//     });
//     // Convert map into array of objects for ngx-charts
//     this.chartData = Array.from(dataMap, ([name, value]) => ({ name, value }));
//   }

//   onSelect(event: any): void {
//     console.log('Item clicked', event);
//   }
// }
