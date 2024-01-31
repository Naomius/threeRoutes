import {InjectionToken} from "@angular/core";
import {IEditWordsManager} from "../edit-words.component";

export const EditWordsFacadeToken = new InjectionToken<IEditWordsManager>('EditWordsFacadeToken');
