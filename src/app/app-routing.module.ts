import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BaseComponent} from "./base/base.component";

const routes: Routes = [
    {
        path: '',
        component: BaseComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./base/add-words/add-words.module').then(m => m.AddWordsModule)
            },
            {
                path: '',
                loadChildren: () => import('./base/words-list/words-list.module').then(m => m.WordsListModule)
            },
            {
                path: '',
                loadChildren: () => import('./base/edit-words/edit-words.module').then(m => m.EditWordsModule)
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
