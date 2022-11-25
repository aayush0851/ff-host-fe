import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {RouteUtil} from "../../shared/utils/route.util";
import {ShopRoutes} from "../../shop/shop.routes";

@Component({
  template: ""
})
export class RedirectComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const admin = this.route.snapshot.url.toString().includes("admin");
    if (admin) {
      console.log('Redirect to Admin Console')
    } else {
      this.router.navigate([RouteUtil.getUrl(ShopRoutes.shop)]);
    }
  }
}
