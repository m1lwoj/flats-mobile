import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, ModalController, ToastController, LoadingController, } from '@ionic/angular';
import { ExplorerService } from '../explorer.service';
import { Flat, FlatList } from '../models/flat.model';
import { FilterPage } from '../filter/filter.page';
import { Filter } from '../models/filter.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  dataList: Flat[] = [];
  filter: Filter;
  page = 1;

  constructor(private svc: ExplorerService,
    private modalController: ModalController,
    private toastController: ToastController,
    private loadingController: LoadingController) {
  }

  ngOnInit() {
    this.fetchData();
  }

  loadMoreData(event: any) {
    setTimeout(() => {
      this.fetchData();
      event.target.complete();

      if (this.dataList.length === 3000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  showDetails(event) {
    
  }

  private async fetchData() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });

    await loading.present();
    this.svc.getFlats(this.filter, this.page).subscribe(args => {
      const items = args.items;
      const length = args.items.length;

      for (let i = 0; i < length; i++) {
        items[i].pricepermeter = items[i].price / items[i].meterage;
        this.dataList.push(items[i]);
      }

      this.page++;
      loading.dismiss();
    });
  }

  refresh() {
    setTimeout(() => {
      this.resetPage();
      this.fetchData();
    }, 500);
  }

  async filterSaved(filter: Filter) {
    this.filter = filter;
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

  async showFilter() {
    // https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/
    const modal = await this.modalController.create({
      component: FilterPage,
      componentProps: {
        filter: this.filter
      }
    });
    modal.onDidDismiss().then((event) => {
      if (event.data) {
        this.filterSaved(event.data);
        this.refresh();
      }
    });

    return await modal.present();
  }


  private resetPage() {
    this.page = 1;
  }
}
