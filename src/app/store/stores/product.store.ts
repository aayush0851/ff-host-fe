import { StoreConfig } from "@datorama/akita";
import { Injectable } from "@angular/core";
import {BaseState, BaseStore} from "../../modules/shared/store/base.store";
import {IStoreProduct} from "../../models/product.model";

export interface ProductState extends BaseState<IStoreProduct> {}

@Injectable({
  providedIn: "root",
})
@StoreConfig({
  name: "products",
  idKey: "id",
})
export class ProductStore extends BaseStore<ProductState, IStoreProduct> {
  constructor() {
    super();
  }
}
