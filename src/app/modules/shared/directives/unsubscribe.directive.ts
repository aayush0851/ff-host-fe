import { Directive, OnDestroy } from "@angular/core";
import { ReplaySubject } from "rxjs";

@Directive()
export abstract class UnsubscribeDirective implements OnDestroy {
  protected destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
