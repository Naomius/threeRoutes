import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddWordsRoutingModule } from './add-words-routing.module';
import {AddWordsComponent} from "./add-words.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    AddWordsComponent
  ],
    imports: [
        CommonModule,
        AddWordsRoutingModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule
    ],
  exports: [
    AddWordsComponent
  ]
})
export class AddWordsModule { }
