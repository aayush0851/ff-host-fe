import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {ShopContainerComponent} from "./components/shop-container/shop-container.component";
import {ShopRoutes} from "./shop.routes";
import {ShopHomeComponent} from "./components/shop-home/shop-home.component";
import {ShopProductsComponent} from "./components/shop-products/shop-products.component";
import {ShopAboutComponent} from "./components/shop-about/shop-about.component";
import {ShopContactComponent} from "./components/shop-contact/shop-contact.component";
import {ShopCartComponent} from "./components/shop-cart/shop-cart.component";

const routes: Routes = [
  {
    path: "",
    component: ShopContainerComponent,
    children: [
      {
        path: "",
        component: ShopHomeComponent
      },
      {
        path: ShopRoutes.products.path,
        component: ShopProductsComponent
      },
      {
        path: ShopRoutes.about.path,
        component: ShopAboutComponent
      },
      {
        path: ShopRoutes.contactUs.path,
        component: ShopContactComponent
      },
      {
        path: ShopRoutes.cart.path,
        component: ShopCartComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
