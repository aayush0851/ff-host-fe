import { Component, OnInit } from '@angular/core';
import {ButtonType} from "../../../shared/components/primary-button/primary-button.component";

@Component({
  selector: 'ff-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  buttonType = ButtonType;
  constructor() { }

  ngOnInit(): void {
  }

}
