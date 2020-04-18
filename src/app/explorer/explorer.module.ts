import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExplorerPageRoutingModule } from './explorer-routing.module';
import { ListPage } from './list/list.page';
import { ExplorerService } from './explorer.service';
import { FilterPage } from './filter/filter.page';
import { DetailsPage } from './details/details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExplorerPageRoutingModule
  ],
  declarations: [ListPage, FilterPage, DetailsPage],
  providers: [
    ExplorerService
  ]
})

export class ExplorerModule { }
