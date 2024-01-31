import { Injectable } from '@angular/core';
import {IWordsListManager} from "../../../base/words-list/words-list.component";
import {Observable} from "rxjs";
import {Words, WordsStoreService} from "../wordsStoreService/wordsStore.service";

@Injectable({
  providedIn: 'root'
})
export class WordsListFacadeService implements IWordsListManager{

  constructor(private wordsStoreService: WordsStoreService) { }

    get CurrentWords(): Observable<Words[]> {
        return this.wordsStoreService.Words;
    }
}
