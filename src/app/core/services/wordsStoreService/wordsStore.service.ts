import { Injectable } from '@angular/core';
import {
    filter,
    map,
    merge,
    Observable,
    ReplaySubject,
    scan,
    share,
    shareReplay,
} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class WordsStoreService {

    private readonly currentWords$!: Observable<Words[]>;

    private initialWord$: ReplaySubject<string> = new ReplaySubject<string>();
    private deleteWordByWord$: ReplaySubject<string> = new ReplaySubject<string>();
    private deleteWordByIndex$: ReplaySubject<string> = new ReplaySubject<string>();
    private deleteFirstWord$: ReplaySubject<void> = new ReplaySubject<void>();
    private deleteLastWord$: ReplaySubject<void> = new ReplaySubject<void>();
    constructor() {
        this.currentWords$ = merge(
            this.initialWord$.pipe(
                filter((words: string) => words.trim() !== ''),
                map(( word: string) => {
                    return {action: 'initial', payload: word}
                }),
            ),
            this.deleteWordByIndex$.pipe(
                map((index: string) => {
                    return {action: 'deleteWordByIndex$', payload: index}
                })
            ),
            this.deleteWordByWord$.pipe(
                map((word: string) => {
                    return {action: 'deleteWordByWord', payload: word}
                })
            ),
            this.deleteFirstWord$.pipe(
                map(_ => ({action: 'deleteByFirstWord', payload: ''}))
            ),
            this.deleteLastWord$.pipe(
                map(_ => ({action: 'deleteByLastWord', payload: ''}))
            )
        ).pipe(
            scan((words: Words[], {action, payload}): Words[] => {
                switch(action) {
                    case 'initial':
                        return [...words, {word: payload}];
                    case 'deleteWordByIndex$':
                        const index = parseInt(payload, 10);
                        return words.filter((_, i) => i !== index)
                    case 'deleteWordByWord':
                        return words.filter(word => word.word !== payload)
                    case 'deleteByFirstWord':
                        return words.slice(1);
                    case 'deleteByLastWord':
                        return words.slice(0, -1);
                    default:
                        return words
                }
            }, []),
            map((words: Words[]) => words.map(words => ({ word: words.word }))),
            share(),
            shareReplay({refCount: true, bufferSize: 1})
        );
    }

    get Words() {
        return this.currentWords$;
    }
    addWordFromInput(word: string): void {
        this.initialWord$.next(word);
    }
    deleteFirstWord(): void {
        this.deleteFirstWord$.next();
    }
    deleteLastWord(): void {
        this.deleteLastWord$.next();
    }
    deleteWordByIndex(index: string): void {
        this.deleteWordByIndex$.next(index);
    }
    deleteWordByWord(word: string): void {
        this.deleteWordByWord$.next(word);
    }
}

export interface Words {
    word: string;
}
