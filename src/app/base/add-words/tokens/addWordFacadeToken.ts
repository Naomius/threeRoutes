import {InjectionToken} from "@angular/core";
import {IAddWordManager} from "../add-words.component";

export const AddWordFacadeToken = new InjectionToken<IAddWordManager>('AddWordFacadeToken')
