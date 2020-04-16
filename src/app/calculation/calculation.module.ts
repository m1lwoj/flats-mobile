import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CalculationPageRoutingModule } from './calculation-routing.module';
import { NewPage } from './new/new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculationPageRoutingModule
  ],
  declarations: [NewPage]
})

export class CalculationModule { }
