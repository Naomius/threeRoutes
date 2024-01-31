import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {RouterLink} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [],
    imports: [
        CommonModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        RouterLink,
        FormsModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        RouterLink
    ]
})
export class SharedModule { }
