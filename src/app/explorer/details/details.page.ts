import { Component, OnInit, Input } from '@angular/core';
import { Flat } from '../models/flat.model';
import { ActivatedRoute } from '@angular/router';
import { ExplorerService } from '../explorer.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html'
})
export class DetailsPage implements OnInit {
  id: string;
  flat: Flat = Flat.create();

  constructor(private activatedRoute: ActivatedRoute, private svc: ExplorerService) {
    this.flat = Flat.create();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.svc.getFlat(this.id).subscribe((flat) => {
      this.flat = flat;
    });
  }

  goToUrl(url: string) {
    window.open(url, '_system');
  }

  addToFavorites() {
  }
}
