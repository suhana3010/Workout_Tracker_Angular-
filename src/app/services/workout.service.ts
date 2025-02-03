

import { Injectable } from '@angular/core';

interface Workout {
  type: string;
  minutes: number;
}

interface User {
  id: number;
  name: string;
  workouts: Workout[];
}

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private users: User[] = [];

  constructor() {
    this.loadUsersFromStorage(); // Initialize users from localStorage
  }

  private loadUsersFromStorage(): void {
    const storedUsers = localStorage.getItem('users');
    this.users = storedUsers ? JSON.parse(storedUsers) : [];
  }

  private saveUsersToStorage(): void {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  searchUsers(name: string): User[] {
    return this.users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
  }

  getWorkouts(userId: number): Workout[] | null {
    const user = this.users.find(u => u.id === userId);
    return user ? user.workouts : null;
  }

  addUser(user: User): void {
    this.users.push(user);
    this.saveUsersToStorage();
  }

  addWorkout(user: User, workout: Workout): void {
    const existingUser = this.users.find(u => u.id === user.id);
    if (existingUser) {
      existingUser.workouts.push(workout);
    } else {
      user.workouts = [workout];
      this.users.push(user);
    }
    this.saveUsersToStorage();
  }

  getUsers(): User[] {
    return this.users;
  }
}

