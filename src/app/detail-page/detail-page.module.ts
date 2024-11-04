import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DetailPage } from './detail-page.page';
import { DetailPageRoutingModule } from './detail-page-routing.module'; // Ensure this is correct

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPageRoutingModule // Correctly import the routing module
  ],
  declarations: [DetailPage] // Make sure the declaration matches the exported component
})
export class DetailPageModule {} // Ensure it matches your naming
