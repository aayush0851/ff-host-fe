import {Component, Input, OnInit} from '@angular/core';
import {CarouselAlignMode, CarouselConfig} from "ng-carousel-cdk";
import {WhatsNewData} from "../../../shop/components/shop-home/shop-home.component";

@Component({
  selector: 'ff-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() carouselData = [
    {
      url: "https://www.w3schools.com/howto/img_nature_wide.jpg"
    },
    {
      url: "https://wowslider.com/sliders/demo-37/data1/images/waterandmountains.jpg"
    },
    {
      url: "https://wowslider.com/sliders/demo-42/data1/images/lighthouse.jpg"
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEn1XX-4MgaGqJ9V2uvvYUmejoBP1_LY5PfQ&usqp=CAU"
    }
  ]

  config: CarouselConfig<WhatsNewData> = {
    items: [],
    slideWidth: 100,
    alignMode: CarouselAlignMode.CENTER,
    allowKeyboardNavigation: false
  }
  constructor() { }

  ngOnInit(): void {
    this.config.items = this.carouselData;
  }

}
