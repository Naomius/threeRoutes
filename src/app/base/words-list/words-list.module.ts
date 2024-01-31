import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WordsListRoutingModule } from './words-list-routing.module';
import {WordsListComponent} from "./words-list.component";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        WordsListComponent
    ],
    imports: [
        CommonModule,
        WordsListRoutingModule,
        MatButtonModule
    ],
    exports: [
        WordsListComponent
    ]
})
export class WordsListModule { }
