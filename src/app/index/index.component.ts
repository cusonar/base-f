import {Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {SideMenu} from "../../../projects/cu-lib/src/lib/side-menu/side-menu.interface";

declare var $: any;
declare var Metro: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  menus: SideMenu[] = [
    {url: 'foo', name: 'foo', icon: 'tree', active: false, isOpen: false, subMenus: [
        {url: 'bar1', name: 'bar1', icon: 'ac_unit'},
        {url: 'bar2', name: 'bar2', icon: ''},
      ]},
    {url: 'foo2', name: 'foo2', icon: 'plus', active: false, isOpen: false, subMenus: [
        {url: 'bar3', name: 'bar3', icon: 'ac_unit'},
        {url: 'bar4', name: 'bar4', icon: ''},
      ]}
  ];
  @ViewChild('mainNavView') mainNavView: ElementRef;
  @ViewChild('mainNavViewContent') mainNavViewContent: ElementRef;
  compacted = true;

  ngOnInit(): void {
    // $(".navview-menu").on(Metro.events.click, "a", function(e){
    //   var href = $(this).attr("href");
    //   var pane = $(this).closest(".navview-pane");
    //   var hash;
    //
    //   if (Metro.utils.isValue(href) && href.indexOf(".html") > -1) {
    //     document.location.href = href;
    //     return false;
    //   }
    //
    //   if (href === "#") {
    //     return false;
    //   }
    //
    //   hash = href.substr(1);
    //   href = hash + ".html";
    //
    //   this.getContent(hash);
    //
    //   if (pane.hasClass("open")) {
    //     pane.removeClass("open");
    //   }
    //
    //   pane.find("li").removeClass("active");
    //   $(this).closest("li").addClass("active");
    //
    //   window.history.pushState(href, href, "index.html#"+hash);
    //
    //   return false;
    // });
  }

  toggleNavview() {
    this.compacted = this.mainNavView.nativeElement.classList.contains('js-compact');
  }

  toggleMenu(menu: SideMenu) {
    if (!menu.isOpen) {
      this.menus.forEach(m => m.isOpen = false);
    }
    menu.isOpen = !menu.isOpen;
  }


  onClickMenu(e: any, menu: SideMenu) {
    if (this.compacted) {
      e.stopPropagation();
    }
    this.menus.forEach(m => m.isOpen = false);
    menu.isOpen = true;
  }

  onContentClick($event: any) {
    if (!this.compacted) {
      this.menus.forEach(m => m.isOpen = false);
    }
  }
}
