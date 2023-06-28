import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Grid from 'tui-grid';
import {Header} from "../../../../projects/cu-lib/src/lib/interface/header.interface";

@Component({
  selector: 'app-bar1',
  templateUrl: './bar1.component.html',
  styleUrls: ['./bar1.component.scss']
})
export class Bar1Component implements AfterViewInit {

  @ViewChild('myGrid') myGrid: ElementRef;
  header: Header = {
    title: 'bar1',
    subTitle: 'foo/bar1',
    icon: 'settings'
  };
  grid: Grid;
  data = [
    {name: 'abc1'},
    {name: 'abc2'},
    {name: 'abc3'},
    {name: 'abc4'},
  ];

  ngAfterViewInit(): void {
    this.grid = new Grid({
      el: this.myGrid.nativeElement,
      data: this.data,
      scrollX: false,
      scrollY: false,
      rowHeaders: ['rowNum'],
      columns: [
        {
          header: 'Name',
          name: 'name',
          filter: 'text'
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

  onFilterKeyup(value: string) {
    console.log(value);
    this.grid.filter('name', [{code: 'eq', value: value}]);
    console.log(this.grid.getFilteredData());
    this.grid.resetData(this.grid.getFilteredData());
  }
}
