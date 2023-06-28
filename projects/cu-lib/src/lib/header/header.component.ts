import {Component, Input} from '@angular/core';
import {Header} from "../interface/header.interface";

@Component({
  selector: 'cu-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() header: Header;
}
