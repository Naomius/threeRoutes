import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {AddWordFacadeToken} from "./tokens/addWordFacadeToken";
import {AddWordsFacadeService} from "../../core/services/facadeManagers/add-words.facade.service";


@Component({
    selector: 'app-add-words',
    templateUrl: './add-words.component.html',
    styleUrls: ['./add-words.component.scss'],
    providers: [
        AddWordsFacadeService,
        {provide: AddWordFacadeToken, useExisting: AddWordsFacadeService}
    ]
})
export class AddWordsComponent implements OnInit, OnDestroy {

    public addWordFromInput$: Subject<string> = new Subject<string>();
    private destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(@Inject(AddWordFacadeToken) private addWordFacadeService: AddWordsFacadeService) {
    }

    ngOnInit(): void {
        this.initializedSideEffects();
    }

    initializedSideEffects(): void {
        this.addWordFromInput$.pipe(
            takeUntil(this.destroy$)
        ).subscribe(word => {
            this.addWordFacadeService.addWordFromInput(word);
        })
    }
    ngOnDestroy(): void {
        this.destroy$.next(true);
    }

}

export interface IAddWordManager {
    addWordFromInput(word: string): void;
}
