import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroceryCategoryPageRoutingModule } from './grocery-category-routing.module';

import { GroceryCategoryPage } from './grocery-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroceryCategoryPageRoutingModule
  ],
  declarations: [GroceryCategoryPage]
})
export class GroceryCategoryPageModule {}
