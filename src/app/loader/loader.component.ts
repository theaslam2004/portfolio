import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loader',
  template: '',
})
export class LoaderComponent {
  constructor(private loadingController: LoadingController) {}

  async presentLoader() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000, // Duration for the loader (2 seconds)
      spinner: 'crescent',
    });
    await loading.present();
  }
}
