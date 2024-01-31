import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {EditWordsFacadeService} from "../../core/services/facadeManagers/edit-words.facade.service";
import {EditWordsFacadeToken} from "./tokens/editWordsFacadeToken";
import {Observable, Subject, takeUntil} from "rxjs";
import {Words} from "../../core/services/wordsStoreService/wordsStore.service";
import {NotificationService} from "../../core/services/notificationService/notification.service";

@Component({
    selector: 'app-edit-words',
    templateUrl: './edit-words.component.html',
    styleUrls: ['./edit-words.component.scss'],
    providers: [
        EditWordsFacadeService,
        {provide: EditWordsFacadeToken, useExisting: EditWordsFacadeService}
    ]
})
export class EditWordsComponent implements OnInit, OnDestroy{

    public deleteWordByWordButton$: Subject<string> = new Subject<string>();
    public deleteWordByIndexButton$: Subject<string> = new Subject<string>();
    public deleteFirstWordButton$: Subject<void> = new Subject<void>();
    public deleteLastWordButton$: Subject<void> = new Subject<void>();
    private destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(@Inject(EditWordsFacadeToken) private editWordsFacadeService: EditWordsFacadeService,
                private notificationService: NotificationService) { //todo не пойму этот момент, я его не успользую но поместил в конструктор, и тем самым он мне выдает сообщения..
    }

    ngOnInit(): void {
        this.initializedSideEffects();
    }

    initializedSideEffects(): void {
        this.deleteFirstWordButton$.pipe(
            takeUntil(this.destroy$)
        ).subscribe(_ => {
            this.editWordsFacadeService.deleteFirstWord();
        })

        this.deleteLastWordButton$.pipe(
            takeUntil(this.destroy$)
        ).subscribe(_ => {
            this.editWordsFacadeService.deleteLastWord();
        })

        this.deleteWordByIndexButton$.pipe(
            takeUntil(this.destroy$)
        ).subscribe(index => {
            this.editWordsFacadeService.deleteWordByIndex(index);
        })

        this.deleteWordByWordButton$.pipe(
            takeUntil(this.destroy$)
        ).subscribe(word => {
            this.editWordsFacadeService.deleteWordByWord(word);
        })
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
    }

}

export interface IEditWordsManager {
    deleteFirstWord(): void;
    deleteLastWord(): void;
    deleteWordByIndex(index: string): void;
    deleteWordByWord(word: string): void;
    Words: Observable<Words[]>;
}
