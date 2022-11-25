import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RedirectComponent} from "./modules/core/components/redirect.component";
import {ShopRoutes} from "./modules/shop/shop.routes";
import {ShopContainerComponent} from "./modules/shop/components/shop-container/shop-container.component";

const routes: Routes = [
  {
    path: "",
    component: RedirectComponent
  },
  {
    path: ShopRoutes.shop.path,
    loadChildren: () =>
      import("./modules/shop/shop.module").then((m) => m.ShopModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
