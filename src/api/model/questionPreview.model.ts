import {Difficulty} from "./difficulty.model";

export interface QuestionPreview {
    id: number,
    body: string,
    difficulty: Difficulty,
    published: boolean,
}