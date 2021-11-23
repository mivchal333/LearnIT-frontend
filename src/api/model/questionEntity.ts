import {Answer} from "./answer.model";
import {CodeLanguage} from "../../constant/codeLanguages";

export interface QuestionEntity {
    id: number,
    body: string,
    codeAttachment: string,
    codeLang: CodeLanguage,
    correctAnswer: Answer,
    difficulty: number,
    badAnswers: Answer[]
}