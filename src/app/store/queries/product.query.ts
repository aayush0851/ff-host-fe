import { Injectable } from "@angular/core";
import {BaseQuery} from "../../modules/shared/store/base.query";
import {ProductState, ProductStore} from "../stores/product.store";
import {IStoreProduct} from "../../models/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductQuery extends BaseQuery<ProductState, IStoreProduct> {
  constructor(protected store: ProductStore) {
    super(store);
  }
}
