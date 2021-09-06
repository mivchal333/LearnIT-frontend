import {Answer} from "./answer.model";

export interface Question {
    id: number,
    body: string,
    technologyId: number,
    difficultyId: number,
    answers: Answer[],
}