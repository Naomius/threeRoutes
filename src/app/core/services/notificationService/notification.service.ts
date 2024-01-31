import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pairwise, startWith } from 'rxjs/operators';
import { Words, WordsStoreService } from '../wordsStoreService/wordsStore.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    words$: Observable<Words[]>;

    constructor(
        private wordStoreService: WordsStoreService,
        private snackBar: MatSnackBar
    ) {
        this.words$ = this.wordStoreService.Words;
        this.initializeSideEffects();
    }

    private initializeSideEffects(): void {
        this.words$.pipe(
            startWith([]),
            pairwise(),
            map(([prevWords, currWords]: [Words[], Words[]]) => {
                if (prevWords.length !== currWords.length) {
                    this.snackBar.open('Слово успешно удалено', 'закрыть', { duration: 2000 });
                } else if (prevWords.length === 0 && currWords.length === 0) {
                    this.snackBar.open('Массив слов пуст. Нет слов для удаления.', 'закрыть', { duration: 2000 });
                } else {
                    this.snackBar.open('Неуспешное удаление слов.', 'закрыть', { duration: 2000 });
                }
            })
        ).subscribe();
    }
}
