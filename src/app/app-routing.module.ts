import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {IndexComponent} from "./index/index.component";
import {Bar1Component} from "./foo/bar1/bar1.component";
import {Bar2Component} from "./foo/bar2/bar2.component";
import {Bar3Component} from "./foo2/bar3/bar3.component";
import {Bar4Component} from "./foo2/bar4/bar4.component";
import {LogoutComponent} from "./logout/logout.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: '', component: IndexComponent, children: [
      {path: 'foo', children: [
          {path: '', redirectTo: 'bar1', pathMatch: 'full'},
          {path: 'bar1', component: Bar1Component},
          {path: 'bar2', component: Bar2Component},
        ]},
      {path: 'foo2', children: [
          {path: '', redirectTo: 'bar3', pathMatch: 'full'},
          {path: 'bar3', component: Bar3Component},
          {path: 'bar4', component: Bar4Component},
        ]}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
