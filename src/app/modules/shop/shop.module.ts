import { NgModule } from "@angular/core";
import { ShopRoutingModule } from "./shop-routing.module";
import { ShopNavbarComponent } from "./components/shop-navbar/shop-navbar.component";
import { SharedModule } from "../shared/shared-module";
import { ShopContainerComponent } from './components/shop-container/shop-container.component';
import { ShopHomeComponent } from './components/shop-home/shop-home.component';
import { ShopProductsComponent } from './components/shop-products/shop-products.component';
import { ShopAboutComponent } from './components/shop-about/shop-about.component';
import { ShopContactComponent } from './components/shop-contact/shop-contact.component';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { ShopFooterComponent } from './components/shop-footer/shop-footer.component';
import { SidebarComponent } from './components/shop-navbar/sidebar/sidebar.component';
import { ItemCardComponent } from './components/item-card/item-card.component';

@NgModule({
  imports: [
    ShopRoutingModule,
    SharedModule
  ],
  declarations: [
    ShopNavbarComponent,
    ShopContainerComponent,
    ShopHomeComponent,
    ShopProductsComponent,
    ShopAboutComponent,
    ShopContactComponent,
    ShopCartComponent,
    ShopFooterComponent,
    SidebarComponent,
    ItemCardComponent
  ],
})
export class ShopModule {}
