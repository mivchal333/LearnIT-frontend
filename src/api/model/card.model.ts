import {Answer} from "./answer.model";
import {CodeLanguage} from "../../constant/codeLanguages";

export interface Card {
    body: string,
    codeAttachment?: string,
    codeLang?: CodeLanguage,
    answer: Answer,
}