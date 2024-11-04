import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginData = {
    identifier: '',  // Either email or phone number
    password: ''
  };

  constructor(private router: Router, private loadingController: LoadingController) { }

  async presentLoader() {
    const loading = await this.loadingController.create({
      message: 'Logging in...',
      duration: 2000, // Duration for the loader (2 seconds)
      spinner: 'crescent',
    });
    await loading.present();
  }

  async onLogin() {
    if (!this.loginData.identifier || !this.loginData.password) {
      alert("Please enter both email/phone and password.");
      return;
    }

    // Retrieve stored user data
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');

    // Find the user by email or phone
    const user = storedUsers.find((user: any) =>
      (user.email === this.loginData.identifier || user.phone === this.loginData.identifier) &&
      user.password === this.loginData.password
    );

    if (user) {
      await this.presentLoader();
      localStorage.setItem('currentUser', JSON.stringify(user)); // Store the user data
      this.router.navigate(['/dashboard'], { replaceUrl: true }); // Navigate to the Dashboard
    } else {
      alert("Invalid email/phone or password. Please try again.");
    }
  }

  goToHomePage() {
    this.router.navigate(['/home']); // Ensure this function is present for home navigation
  }
}
