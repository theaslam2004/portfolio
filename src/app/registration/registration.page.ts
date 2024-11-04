import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { AlertController } from '@ionic/angular'; 

interface User {
  name: string;
  email: string;
  phone: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage {
  user: User = {
    name: '',
    email: '',
    phone: '',
    password: ''
  };
  confirmPassword = '';

  constructor(private router: Router, private alertController: AlertController) { }

  goToHomePage() {
    this.router.navigate(['/home']); 
  }

  async onSubmit() {
    // Check if password and confirm password match
    if (this.user.password !== this.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Check if user already exists
    const existingUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = existingUsers.some(existingUser =>
      existingUser.email === this.user.email || existingUser.phone === this.user.phone
    );

    if (userExists) {
      this.showAlert("You have already registered with this email or phone number.");
      return; 
    }

    // Store the user data
    existingUsers.push(this.user);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    console.log("User registered successfully!", this.user);
    this.router.navigate(['/login']); 
  }

  async showAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Registration Error',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  onClear() {
    // Clear the form fields
    this.user = { name: '', email: '', phone: '', password: '' };
    this.confirmPassword = '';
  }
}
