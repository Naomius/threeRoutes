import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditWordsRoutingModule } from './edit-words-routing.module';
import { EditWordsComponent } from "./edit-words.component";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        EditWordsComponent
    ],
    imports: [
        CommonModule,
        EditWordsRoutingModule,
        MatButtonModule,
        FormsModule
    ],
    exports: [
        EditWordsComponent
    ]
})
export class EditWordsModule { }
