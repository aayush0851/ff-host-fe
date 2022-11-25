import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ButtonSizeEnum} from "../../../../models/button-size.enum";

@Component({
  selector: 'ff-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent implements OnInit {
  @Input() type: ButtonType = ButtonType.DEFAULT;
  @Input() size: ButtonSizeEnum = ButtonSizeEnum.S;
  @Input() icon: string;
  @Input() title: string;
  @Output() clicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}

export enum ButtonType {
  DANGER = "danger",
  HIGHLIGHT = "highlight",
  DEFAULT = "default",
}
