import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Grid from 'tui-grid';
import {Header} from "../../../../projects/cu-lib/src/lib/interface/header.interface";
import * as _ from 'lodash';

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
  filteredData: any = [];

  ngAfterViewInit(): void {
    this.grid = new Grid({
      el: this.myGrid.nativeElement,
      data: _.cloneDeep(this.data),
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

  onFilterKeyup(value: string) {
    this.filteredData = _.cloneDeep(this.data.filter((d: any) => {
      for (let key in d) {
        if (d[key].indexOf && d[key].indexOf(value) > -1) return true;
      }
      return false;
    }));
    this.grid.resetData(this.filteredData);
  }
}
