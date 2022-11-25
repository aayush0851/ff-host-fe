import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'ff-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output() toggleSidebar =  new EventEmitter();
}
