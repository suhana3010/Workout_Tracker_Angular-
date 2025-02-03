import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutFormComponent } from '../workout-form/workout-form.component';

@Component({
  selector: 'app-add-workout',
  standalone: true,
  imports: [CommonModule, WorkoutFormComponent],
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.scss']
})
export class AddWorkoutComponent {
 
  onWorkoutAdded(newWorkout: any) {
   
    console.log('Workout added:', newWorkout);
  }
}
