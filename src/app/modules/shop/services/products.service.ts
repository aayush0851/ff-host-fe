import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {CRUDService} from "../../core/service/crud.service";
import {Observable} from "rxjs";
import {IServerProduct} from "../../../models/product.model";

@Injectable({ providedIn: "root" })
export class ProductService extends CRUDService {
  constructor(
    http: HttpClient
  ) {
    super(http);
  }

  getProductsList(): Observable<IServerProduct[]> {
    return this._getAll<IServerProduct>(this.productUri());
  }

  private productUri(productId?: number) {
    return `products/${productId || ""}`
  }

}
