import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ff-section-heading',
  templateUrl: './section-heading.component.html',
  styleUrls: ['./section-heading.component.scss']
})
export class SectionHeadingComponent {
  @Input() title = "";
  constructor() { }

}
