import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {SideMenu} from "../interface/side-menu.interface";
declare var $: any;

@Component({
  selector: 'cu-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @Input() sideMenus: SideMenu[];
  @Input() logo: string;
  @Input() userImage: string;
  @Input() username: string;
  @Input() lastLoginTime: Date;

  ngOnInit(): void {
    $('#user-info').popup({
      inline: true,
      hoverable: true,
      position: 'bottom center',
    });
  }

}
