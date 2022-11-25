import { Injectable } from "@angular/core";
import {ProductService} from "../../modules/shop/services/products.service";
import {ProductStore} from "../stores/product.store";
import {ProductQuery} from "../queries/product.query";
import {Observable, of, ReplaySubject, take, takeUntil} from "rxjs";
import {IStoreProduct} from "../../models/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductsManager {
  constructor(
    private service: ProductService,
    private store: ProductStore,
    private query: ProductQuery
  ) {}

  getAllProductsList(
    listenOnce = true,
    takeUntil$?: ReplaySubject<boolean>
  ): Observable<IStoreProduct[]> {
    if (this.query.shouldCallApi()) {
      this.store.setLoading(true);
      this.service.getProductsList().subscribe((products) => {
        this.store.upsertMany(products);
        this.store.setLoaded(true);
      });
    }

    const products$ = this.query.selectAll()

    if (listenOnce) {
      return products$.pipe(take(1));
    }
    return products$.pipe(
      takeUntil(takeUntil$ || of())
    )

  }
}
