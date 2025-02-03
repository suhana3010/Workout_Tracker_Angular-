import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


interface Workout {
  type: string;
  minutes: number;
}

interface User {
  id: number;
  name: string;
  workouts: Workout[];
} 
@Component({
  selector: 'app-workout-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.scss']
})
export class WorkoutFormComponent {
  
  userName: string = '';
  workoutType: string = '';
  workoutMinutes: number | null = null;

  workoutTypes: string[] = [ 'Running', 'Cycling', 'Yoga', 'Swimming', 'Weightlifting'];
  users: User[] = [];

//   addWorkout() {
//     if (this.userName && this.workoutType && this.workoutMinutes) {
      
//       const newWorkout = {
//         id: Date.now(),
//         userName: this.userName,
//         workoutType: this.workoutType,
//         workoutMinutes: this.workoutMinutes
//       };
     
//       console.log('New Workout:', newWorkout);
//       this.clearForm();
//     }
//   }

//   clearForm() {
//     this.userName = '';
//     this.workoutType = '';
//     this.workoutMinutes = null;
//   }
// }
addWorkout() {
  if (this.userName && this.workoutType && this.workoutMinutes !== null) {
    const userNameKey = this.userName.trim().toLowerCase();

    let user = this.users.find(u => u.name.toLowerCase() === userNameKey);

    if (!user) {
      user = { id: Date.now(), name: this.userName.trim(), workouts: [] };
      this.users.push(user);
    }

    // Add the workout to the existing user
    user.workouts.push({
      type: this.workoutType,
      minutes: this.workoutMinutes,
    });

    console.log(`Workout added for user ${user.name}:`, user.workouts);
    this.clearForm();
  } else {
    console.warn('Please fill out all fields before adding a workout.');
  }
}


clearForm() {
  this.workoutType = '';
  this.workoutMinutes = null;
}
}