import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  navigate(arg0: string[]) {
    throw new Error('Method not implemented.');
  }
  selectedSegment: string = 'default';  // Default value

  constructor(private navCtrl: NavController) {}

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;

    if (this.selectedSegment === 'Registration') {
      // Navigate to Registration page
      this.navCtrl.navigateForward('/registration');
    } else if (this.selectedSegment === 'Login') {
      // Navigate to Login page
      this.navCtrl.navigateForward('/login');
    }
  }
}
