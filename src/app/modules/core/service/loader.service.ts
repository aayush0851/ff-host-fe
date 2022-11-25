import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class LoaderService {
  status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  loader(value: boolean) {
    setTimeout(() => {
      this.status.next(value);
    }, 0);
  }

  showLoader() {
    this.loader(true);
  }

  hideLoader() {
    this.loader(false);
  }
}
