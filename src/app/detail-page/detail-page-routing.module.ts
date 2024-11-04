import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailPage } from './detail-page.page'; // Make sure the name matches the export in detail-page.page.ts

const routes: Routes = [
  {
    path: ':id',
    component: DetailPage // Ensure the component name matches
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPageRoutingModule {} // No need for 'DetailPagePageRoutingModule'
