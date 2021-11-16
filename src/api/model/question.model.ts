import {Answer} from "./answer.model";
import {CodeLanguage} from "../../constant/codeLanguages";

export interface QuestionModel {
    id: number,
    body: string,
    codeAttachment?: string,
    codeLang?: CodeLanguage,
    technologyId: number,
    difficultyId: number,
    answers: Answer[],
}