import {NgModule} from "@angular/core";
import {MatMenuModule} from "@angular/material/menu";
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from "@angular/common";
import {MatTabsModule} from "@angular/material/tabs";
import { MatSidenavModule } from "@angular/material/sidenav";
import {SectionHeadingComponent} from "./components/section-heading/section-heading.component";
import {PrimaryButtonComponent} from "./components/primary-button/primary-button.component";
import {CarouselModule} from "ng-carousel-cdk";
import {CarouselComponent} from "./components/carousel/carousel.component";
import {NgxMasonryModule} from "ngx-masonry";
import {ReviewCardsComponent} from "./components/review-cards/review-cards.component";

const commonComponents = [
  SectionHeadingComponent,
  PrimaryButtonComponent,
  CarouselComponent,
  ReviewCardsComponent
]
const commonModules = [
  MatMenuModule,
  MatBadgeModule,
  MatIconModule,
  CommonModule,
  MatTabsModule,
  MatSidenavModule,
  NgxMasonryModule
];

@NgModule({
  imports: [
    CarouselModule,
    ...commonModules
  ],
  exports: [
    ...commonModules,
    ...commonComponents
  ],
  declarations: [
    ...commonComponents
  ],
  providers: [
  ]
})
export class SharedModule {}
