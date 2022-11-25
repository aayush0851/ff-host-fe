import {NgModule} from "@angular/core";
import {LoaderService} from "./service/loader.service";
import {RedirectComponent} from "./components/redirect.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [RedirectComponent],
  declarations: [
    RedirectComponent
  ],
  providers: [
    LoaderService
  ]
})
export class CoreModule {}
