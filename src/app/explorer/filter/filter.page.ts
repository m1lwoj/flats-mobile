import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Filter } from '../models/filter.model';
import { PREDEFINED_REGIONS } from './predefinedregions';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
  private meterage = {
    upper: 34,
    lower: 65
  };

  private region: string;

  private price = {
    upper: 220000,
    lower: 650000
  };

  private filter: Filter;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    if (this.filter) {
      this.meterage.upper = this.filter.meterageTo;
      this.meterage.lower = this.filter.meterageFrom;
      this.price.upper = this.filter.priceTo;
      this.price.lower = this.filter.priceFrom;
      this.region = this.filter.region;
    }
  }

  save() {
    const regionCoordinates = this.region ? PREDEFINED_REGIONS[this.region] : [];
    const filter = new Filter(
      this.price.lower,
      this.price.upper,
      this.meterage.lower,
      this.meterage.upper,
      this.region,
      regionCoordinates);

    this.modalController.dismiss(filter);
  }

  close() {
    this.modalController.dismiss(null);
  }
}
