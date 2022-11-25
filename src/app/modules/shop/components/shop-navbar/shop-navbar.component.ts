import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IStoreProduct} from "../../../../models/product.model";
import {ProductsManager} from "../../../../store/manager/products.manager";
import {LoaderService} from "../../../core/service/loader.service";
import {UnsubscribeDirective} from "../../../shared/directives/unsubscribe.directive";
import {RouteUtil} from "../../../shared/utils/route.util";
import {ShopRoutes} from "../../shop.routes";
import {Router} from "@angular/router";

@Component({
  selector: 'ff-shop-navbar',
  templateUrl: './shop-navbar.component.html',
  styleUrls: ['./shop-navbar.component.scss']
})
export class ShopNavbarComponent extends UnsubscribeDirective implements OnInit {
  cartCount = 0;
  products: IStoreProduct[] = [];
  navTabs: NavigationTab[] = [
    {
      name: NavigationActions.PRODUCTS,
      url: RouteUtil.getUrl(ShopRoutes.products),
      isActive: false
    },
    {
      name: NavigationActions.ABOUT,
      url: RouteUtil.getUrl(ShopRoutes.about),
      isActive: false
    },
    {
      name: NavigationActions.CONTACT_US,
      url: RouteUtil.getUrl(ShopRoutes.contactUs),
      isActive: false
    }
  ];

  @Output() sidebarOpened = new EventEmitter<boolean>();

  constructor(
    private productsManager: ProductsManager,
    private loaderService: LoaderService,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.getProductsList();
    this.getCartStatus();
  }


  private getProductsList(): void {
    this.loaderService.loader(true)
    this.productsManager.getAllProductsList(false, this.destroyed$)
      .subscribe(products => {
        this.products = products;
        this.loaderService.loader(false);
      }, () => {
        this.loaderService.loader(false);
      })
  }

  resetTabs(): void {
    this.navTabs.forEach(tab => {
      tab.isActive = false;
    })
  }

  navigateToTab(tab: NavigationTab): void {
    this.router.navigate([tab.url]);
    this.setTabActive(tab);
  }

  private setTabActive(activeTab: NavigationTab): void {
    this.navTabs.forEach(tab => {
      tab.isActive = tab.name === activeTab.name;
    })
  }

  private getCartStatus() {

  }
}

export enum NavigationActions {
  PRODUCTS = "Products",
  ABOUT = "About",
  CONTACT_US = "Contact Us"
}

export interface NavigationTab {
  url: string;
  name: string;
  isActive: boolean;
}
