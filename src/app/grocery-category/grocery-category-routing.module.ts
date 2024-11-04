import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroceryCategoryPage } from './grocery-category.page';

const routes: Routes = [
  {
    path: '',
    component: GroceryCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroceryCategoryPageRoutingModule {}
