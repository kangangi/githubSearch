import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from '../home/home.component';
import {SearchFormComponent} from '../search-form/search-form.component';

const routes:Routes=[
  {path:"home", component: HomeComponent},
  {path : "search", component : SearchFormComponent},
  {path: "",redirectTo:"/home", pathMatch:"full"}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
