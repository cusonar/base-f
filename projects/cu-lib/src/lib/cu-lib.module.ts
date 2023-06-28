import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import { LayoutComponent } from './layout/layout.component';
import {RouterModule} from "@angular/router";
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
  ],
  exports: [
    LayoutComponent,
    HeaderComponent
  ]
})
export class CuLibModule { }
