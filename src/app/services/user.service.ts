// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private storage: Storage) {
    this.storage.create(); // Initialize storage
  }

  async registerUser(user) {
    const users = await this.storage.get('users') || []; // Get existing users or an empty array

    // Check if user already exists
    const userExists = users.some(existingUser => 
      existingUser.email === user.email || existingUser.phone === user.phone
    );

    if (userExists) {
      throw new Error('User already registered');
    }

    users.push(user); // Add the new user to the array
    await this.storage.set('users', users); // Store the updated array in storage
  }

  async getUsers() {
    return await this.storage.get('users') || []; // Retrieve users from storage
  }
}
