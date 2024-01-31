import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BaseComponent} from "./base/base.component";
import {SharedModule} from "./shared/shared.module";
import {NavigationModule} from "./base/navigation/navigation.module";
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
    declarations: [
        AppComponent,
        BaseComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule, MatSnackBarModule,
        BrowserAnimationsModule,
        NavigationModule
    ],
  providers: [
      {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
