import {AnswerPayloadModel} from "./answerPayload.model";

export interface CreateQuestionModel {
    body: string,
    difficultyValue: number,
    correctAnswer: AnswerPayloadModel,
    badAnswers: AnswerPayloadModel[],
    codeLang?: string,
    codeAttachment?: string,
}