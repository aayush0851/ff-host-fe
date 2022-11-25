import {Component, OnInit, ViewChild} from '@angular/core';
import {NgxMasonryComponent, NgxMasonryOptions} from "ngx-masonry";

@Component({
  selector: 'ff-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.scss']
})
export class ShopHomeComponent implements OnInit {
  masonryOptions: NgxMasonryOptions = {
    gutter: 80,
    itemSelector: ".grid-item",
    columnWidth: ".grid-item",
    horizontalOrder: true,
    fitWidth: true,
    percentPosition: true
  };

  layoutCompleted = false;
  constructor() { }

  @ViewChild('masonry') masonry: NgxMasonryComponent;

  ngOnInit(): void {
  }


  onLayoutComplete() {
    setTimeout(() => {
      this.layoutCompleted = true;
      this.reloadMasonry();
    });
  }

  reloadMasonry() {
    if (!this.masonry) {
      return;
    }
    // timeout is used to adjust for css transition time
    setTimeout(() => {
      if (this.layoutCompleted) {
        this.masonry.reloadItems();
        this.masonry.layout();
        this.layoutCompleted = false
      }
    });
  }
}

export interface WhatsNewData {
  url: string,
  heading?: string,
  description?: string,
  navigation?: string
}
