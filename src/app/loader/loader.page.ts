import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage {
  constructor(private router: Router) { }

  ngOnInit() {
    this.showLoader();
  }

  async showLoader() {
    // Simulate loading time
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 3000); // Change this to the desired loader duration
  }
}
