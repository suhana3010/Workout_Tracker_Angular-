import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { WorkoutService } from './services/workout.service';
import { HomeComponent } from './home/home.component'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@NgModule({
  declarations:[
    AppComponent,
    HomeComponent,
  
  ],

  imports: [
  
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    WorkoutListComponent,
    NgxChartsModule,
    RouterModule.forRoot([
      { path: 'workouts', component: WorkoutListComponent }
    ])
  ],
  providers: [WorkoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
