import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import {SharedModule} from "../shared/shared.module";
import {BaseComponent} from "./base.component";


@NgModule({
  declarations: [
    BaseComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    BaseRoutingModule,
    SharedModule
  ]
})
export class BaseModule { }
