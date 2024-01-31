import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddWordsComponent} from "./add-words.component";

const routes: Routes = [
    {
        path: 'add-words',
        component: AddWordsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],

})
export class AddWordsRoutingModule {

}
