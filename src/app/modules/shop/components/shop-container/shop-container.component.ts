import { Component, OnInit } from '@angular/core';
import {ProductsManager} from "../../../../store/manager/products.manager";
import {IStoreProduct} from "../../../../models/product.model";
import {UnsubscribeDirective} from "../../../shared/directives/unsubscribe.directive";
import {LoaderService} from "../../../core/service/loader.service";

@Component({
  selector: 'ff-shop-container',
  templateUrl: './shop-container.component.html',
  styleUrls: ['./shop-container.component.scss']
})
export class ShopContainerComponent {
  isSidebarOpen = false;
}
