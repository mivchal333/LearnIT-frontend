import {Answer} from "./answer.model";
import {GameProgress} from "./gameProgress.model";

export interface Card extends GameProgress {
    body: string,
    answer: Answer,
}