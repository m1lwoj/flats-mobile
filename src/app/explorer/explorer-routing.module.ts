import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPage } from './list/list.page';
import { FilterPage } from './filter/filter.page';

const routes: Routes = [
  {
    path: '',
    component: ListPage
  },
  {
    path: 'list',
    component: ListPage
  },
  {
    path: 'list/filter',
    component: FilterPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExplorerPageRoutingModule {}
