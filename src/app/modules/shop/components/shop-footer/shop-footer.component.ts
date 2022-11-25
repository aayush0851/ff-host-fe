import { Component } from '@angular/core';

@Component({
  selector: 'ff-shop-footer',
  templateUrl: './shop-footer.component.html',
  styleUrls: ['./shop-footer.component.scss']
})
export class ShopFooterComponent {
  socialLinks = SocialLinks;
  constructor() { }

  navigateTo(url: string) {
    window.open(url, "_blank");
  }

}

export enum SocialLinks {
  FACEBOOK = "https://www.facebook.com/profile.php?id=100078931785399",
  LINKED_IN = "https://www.linkedin.com/in/fitness-flame-team",
  INSTAGRAM = "https://instagram.com/fitnessflamenutrition?igshid=YmMyMTA2M2Y=",
  GMAIL = "support@fitnessflamenutrition.com"
}
