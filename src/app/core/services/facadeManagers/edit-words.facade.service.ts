import { Injectable } from '@angular/core';
import {IEditWordsManager} from "../../../base/edit-words/edit-words.component";
import {Words, WordsStoreService} from "../wordsStoreService/wordsStore.service";
import {Observable} from "rxjs";

@Injectable()
export class EditWordsFacadeService implements IEditWordsManager{

    constructor(private wordsStoreService: WordsStoreService) {
    }

    get Words(): Observable<Words[]> {
        return this.wordsStoreService.Words;
    }
    deleteFirstWord(): void {
        this.wordsStoreService.deleteFirstWord();
    }
    deleteLastWord(): void {
        this.wordsStoreService.deleteLastWord();
    }
    deleteWordByIndex(index: string): void {
        this.wordsStoreService.deleteWordByIndex(index);
    }
    deleteWordByWord(word: string): void {
        this.wordsStoreService.deleteWordByWord(word);
    }
}
