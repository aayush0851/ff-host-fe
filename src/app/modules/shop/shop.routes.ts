export class ShopRoutes {
  static shop: RoutePath = {
    path: "shop",
    parent: null
  }

  static products: RoutePath = {
    path: "products",
    parent: ShopRoutes.shop
  }

  static about: RoutePath = {
    path: "about",
    parent: ShopRoutes.shop
  }

  static contactUs: RoutePath = {
    path: "contact-us",
    parent: ShopRoutes.shop
  }

  static cart: RoutePath = {
    path: "cart",
    parent: ShopRoutes.shop
  }
}

export interface RoutePath {
  path: string;
  parent: RoutePath | null;
}
