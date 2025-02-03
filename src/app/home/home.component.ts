
import { Component,  NgModule,  OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({

  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false
})


export class HomeComponent implements OnInit {
  userName: string = '';
  workoutType: string = '';
  workoutMinutes: number = 0;
  userData: any[] = [];
  searchText: string = '';
  selectedWorkoutType: string = '';
  workoutTypes: string[] = ['Running', 'Cycling', 'Swimming', 'Yoga'];
  currentPage: number = 1;
  itemsPerPage: number = 5;

  constructor() {}

  ngOnInit(): void {
    // Check if user data exists in localStorage
    const savedData = localStorage.getItem('userData');
    if (savedData) {
      this.userData = JSON.parse(savedData);
    }
    this.updatePagination();
  }

  addUser() {
    const newUser = {
      id: this.userData.length + 1,
      name: this.userName,
      workouts: [{ type: this.workoutType, minutes: this.workoutMinutes }],
    };
    this.userData.push(newUser);
    this.updateLocalStorage();
    this.userName = '';
    this.workoutType = '';
    this.workoutMinutes = 0;
    this.updatePagination();
  }

  getFilteredWorkoutTypes(): string[] {
    return this.workoutTypes;
  }
  
  onSearchInputChange(): void {
    this.searchUsers();
  }
  
  onWorkoutTypeChange(): void {
    this.filterWorkouts();
  }
  
  searchUsers() {
    this.updatePagination();
  }

  filterWorkouts() {
    this.updatePagination();
  }

  updatePagination() {
    let filteredData = this.userData;

    // Search by user name
    if (this.searchText) {
      filteredData = filteredData.filter(user => user.name.toLowerCase().includes(this.searchText.toLowerCase()));
    }

    
    if (this.selectedWorkoutType) {
      filteredData = filteredData.filter(user =>
        user.workouts.some( (workout: { type: string; }) => workout.type === this.selectedWorkoutType)
      );
    }

    this.totalPages = Math.ceil(filteredData.length / this.itemsPerPage);
    this.paginatedUsers = filteredData.slice(
      (this.currentPage - 1) * this.itemsPerPage,
      this.currentPage * this.itemsPerPage
    );
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  updateLocalStorage() {
    localStorage.setItem('userData', JSON.stringify(this.userData));
  }
  getWorkoutTypes(user: any): string {
    return user.workouts.map((w: any) => w.type).join(', ');
  }
  
  getWorkoutMinutes(user: any): string {
    return user.workouts.map((w: any) => w.minutes).join(', ');
  }
  
  paginatedUsers: any[] = [];
  totalPages: number = 1;
}
