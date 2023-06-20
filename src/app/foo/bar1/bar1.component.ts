import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Grid from 'tui-grid';

@Component({
  selector: 'app-bar1',
  templateUrl: './bar1.component.html',
  styleUrls: ['./bar1.component.scss']
})
export class Bar1Component implements AfterViewInit {

  @ViewChild('myGrid') myGrid: ElementRef;

  ngAfterViewInit(): void {
    const grid = new Grid({
      el: this.myGrid.nativeElement,
      data: [
        {name: 'abc'},
        {name: 'abc'},
        {name: 'abc'},
        {name: 'abc'},
      ],
      scrollX: false,
      scrollY: false,
      rowHeaders: ['rowNum'],
      columns: [
        {
          header: 'Name',
          name: 'name'
        },
        {
          header: 'Artist',
          name: 'artist'
        },
        {
          header: 'Type',
          name: 'type'
        },
        {
          header: 'Release',
          name: 'release'
        },
        {
          header: 'Genre',
          name: 'genre'
        }
      ]
    });
    Grid.applyTheme('clean');
  }

}
