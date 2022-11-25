import {
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import {
  ActivatedRoute,
  Router,
} from "@angular/router";
import {LoaderService} from "../modules/core/service/loader.service";

@Component({
  selector: "ff-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  showLoader = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loaderService: LoaderService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loaderService.status.subscribe((val) => {
      this.showLoader = val;
      // Refer https://pulselabsai.atlassian.net/browse/PL-778 for more details
      this.cd.detectChanges();
    });

  }
}
