import {RoutePath} from "../../shop/shop.routes";

export class RouteUtil {
  /**
   * let routePath = {
   *   A = "url/:id"
   *   B = "full"
   *   C = "its"
   * }
   *
   * let routeMap= {
   *   [routePath.A] : B,
   *   [routePath.B] : C
   * }
   *
   * @param route :  a child path such as routePath.A
   * @param data : json to put data in final route -> eg {id : 1}
   * @param isRelative : boolean to mark that url is relative or not? If true it returns /A as is,
   * if false it recursively searches hierarchical parents of A, returns C/B/A ie its/full/url/1
   *
   */
  static getUrl(route: RoutePath, data?: any, isRelative = false): string {
    let url: string = route.path;
    let parent: RoutePath;

    do {
      // @ts-ignore
      parent = RouteUtil.getParent(parent ? parent : route);
      url = (parent && !isRelative ? parent.path + "/" : "") + url;
    } while (parent && !isRelative);

    // If url is absolute , prepend with leading "/"
    url = (isRelative ? "" : "/") + url;

    if (data) {
      return RouteUtil.url(url, data);
    } else {
      return url;
    }
  }

  private static url(path: string, data: any): string {
    Object.keys(data).forEach((key) => {
      path = path.replace(`:${key}`, data[key]);
    });
    return path;
  }

  private static getParent(child: RoutePath): RoutePath | null {
    return child.parent;
  }
}
