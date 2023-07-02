import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { Bar1Component } from './foo/bar1/bar1.component';
import { Bar2Component } from './foo/bar2/bar2.component';
import { Bar3Component } from './foo2/bar3/bar3.component';
import { Bar4Component } from './foo2/bar4/bar4.component';
import {FormsModule} from "@angular/forms";
import {CuLibModule} from "../../projects/cu-lib/src/lib/cu-lib.module";
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    Bar1Component,
    Bar2Component,
    Bar3Component,
    Bar4Component,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CuLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
