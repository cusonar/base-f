import {Component, OnInit} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-bar3',
  templateUrl: './bar3.component.html',
  styleUrls: ['./bar3.component.scss']
})
export class Bar3Component implements OnInit {

  ngOnInit(): void {
    $('#tree').fancytree({
      source: [{"title": "Node 1", "key": "1"},
        {
          "title": "Folder 2", "key": "2", "folder": true, "children": [
            {"title": "Node 2.1", "key": "3"},
            {"title": "Node 2.2", "key": "4"}
          ]
        }
      ]
    });
  }
}
