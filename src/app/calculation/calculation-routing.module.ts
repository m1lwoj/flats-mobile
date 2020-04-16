import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPage } from './new/new.page';

const routes: Routes = [
  {
    path: 'new',
    component: NewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculationPageRoutingModule {}
