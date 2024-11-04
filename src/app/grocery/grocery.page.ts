import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; // Import NavigationEnd
import { addIcons } from 'ionicons';
import { library, playCircle, radio, search } from 'ionicons/icons';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.page.html',
  styleUrls: ['./grocery.page.scss'], // Ensure this file exists as grocery.page.scss or grocery.page.css
})
export class GroceryPage implements OnInit {
  user: any; // Declare user variable
  greeting: string;
  selectedTab: string = 'grocery'; // Set default selected tab

  constructor(private router: Router) {
    this.user = this.getUser(); // Get user data from localStorage
    this.greeting = this.getGreeting(); // Get appropriate greeting

    // Handle tab selection based on URL
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects.split('/');
        this.selectedTab = url[url.length - 1]; // Set selected tab based on the URL
      }
    });
  }

  getUser() {
    const userData = localStorage.getItem('currentUser');
    return userData ? JSON.parse(userData) : null; // Retrieve and parse user data
  }

  getGreeting(): string {
    const hour = new Date().getHours();
    if (hour < 12) {
      return 'Good morning';
    } else if (hour < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  }

  ngOnInit() {
    // Add any initialization logic here
  }
}

// ExampleComponent for icons
@Component({
  selector: 'app-example',
  template: '', // Use a template if needed, or remove this line
  styleUrls: ['grocery.page.scss'], // Correctly reference CSS/SCSS file
})
export class ExampleComponent {
  constructor() {
    // Register any icons you want to use in your application
    addIcons({ library, playCircle, radio, search });
  }
}
