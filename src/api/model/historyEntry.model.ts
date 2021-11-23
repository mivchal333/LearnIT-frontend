import {QuestionPreview} from "./questionPreview.model";

export interface HistoryEntry {
    id: number,
    question: QuestionPreview,
    answerResult: boolean,
    date: string,
}