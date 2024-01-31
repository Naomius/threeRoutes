import {Component, Inject, OnInit} from '@angular/core';
import {WordsListFacadeService} from "../../core/services/facadeManagers/words-list.facade.service";
import {WordsListFacadeToken} from "./tokens/wordsListFacadeToken";
import {Observable} from "rxjs";
import {Words} from "../../core/services/wordsStoreService/wordsStore.service";

@Component({
    selector: 'app-words-list',
    templateUrl: './words-list.component.html',
    styleUrls: ['./words-list.component.scss'],
    providers: [
        WordsListFacadeService,
        {provide: WordsListFacadeToken, useExisting: WordsListFacadeService}
    ]
})
export class WordsListComponent implements OnInit{

    public currentWords!: Observable<Words[]>;
    constructor(@Inject(WordsListFacadeToken) private wordsListFacadeService: WordsListFacadeService) {
    }

    ngOnInit(): void {
        this.currentWords = this.wordsListFacadeService.CurrentWords;
    }

}

export interface IWordsListManager {
    CurrentWords: Observable<Words[]>
}
