import {Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {SideMenu} from "../../../projects/cu-lib/src/lib/interface/side-menu.interface";

declare var $: any;
declare var Metro: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  sideMenus = [
    {url: 'foo', name: 'foo', icon: 'tree', active: false, isOpen: false, subMenus: [
        {url: 'bar1', name: 'bar1', icon: 'ac_unit'},
        {url: 'bar2', name: 'bar2', icon: ''},
      ]},
    {url: 'foo2', name: 'foo2', icon: 'plus', active: false, isOpen: false, subMenus: [
        {url: 'bar3', name: 'bar3', icon: 'ac_unit'},
        {url: 'bar4', name: 'bar4', icon: ''},
      ]}
  ];

  ngOnInit(): void {
  }
}
