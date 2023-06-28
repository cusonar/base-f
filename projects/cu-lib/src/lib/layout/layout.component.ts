import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {SideMenu} from "../interface/side-menu.interface";

@Component({
  selector: 'cu-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  @Input() sideMenus: SideMenu[];

  ngOnInit(): void {
  }

}
