import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Angular Material modules
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

interface Workout {
  id: number;
  userName: string;
  workoutType: string;
  workoutMinutes: number;
}

@Component({
  selector: 'app-workout-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss'],
})
export class WorkoutListComponent implements OnChanges {
  @Input() workouts: Workout[] = [];

  searchQuery: string = '';
  filterType: string = '';
  filteredWorkouts: Workout[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  workoutTypes: string[] = [
    'Running',
    'Cycling',
    'Yoga',
    'Swimming',
    'Weightlifting',
  ];

  displayedColumns: string[] = ['userName', 'workoutType', 'workoutMinutes'];

  ngOnChanges() {
    this.applyFilters();
  }

  applyFilters() {
    let filtered = this.workouts;

    if (this.searchQuery) {
      filtered = filtered.filter((workout) =>
        workout.userName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    if (this.filterType) {
      filtered = filtered.filter(
        (workout) => workout.workoutType === this.filterType
      );
    }

    this.filteredWorkouts = filtered;
    this.currentPage = 1;
  }

  get paginatedWorkouts(): Workout[] {
    const start =  (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredWorkouts.slice(start, start + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.filteredWorkouts.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
