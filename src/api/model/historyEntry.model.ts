import {Difficulty} from "./difficulty.model";

export interface QuestionPreview {
    id: number,
    body: string,
    difficulty: Difficulty,
}

export interface HistoryEntry {
    id: number,
    question: QuestionPreview,
    answerResult: boolean,
    date: string,
}