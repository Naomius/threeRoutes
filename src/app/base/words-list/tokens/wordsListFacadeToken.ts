import {InjectionToken} from "@angular/core";
import {IWordsListManager} from "../words-list.component";


export const WordsListFacadeToken = new InjectionToken<IWordsListManager>('WordsListFacadeToken')
