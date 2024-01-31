import { Injectable } from '@angular/core';
import {IAddWordManager} from "../../../base/add-words/add-words.component";
import {WordsStoreService} from "../wordsStoreService/wordsStore.service";

@Injectable()
export class AddWordsFacadeService implements IAddWordManager {
    constructor(private wordsStoreService: WordsStoreService) {
    }
    addWordFromInput(word: string): void {
        this.wordsStoreService.addWordFromInput(word);
    }
}
