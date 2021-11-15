import {AnswerPayloadModel} from "./answerPayload.model";

export interface CreateQuestionModel {
    body: string,
    technologyId: number,
    difficultyValue: number,
    correctAnswer: AnswerPayloadModel,
    badAnswers: AnswerPayloadModel[],
    codeLag?: string,
    codeAttachment?: string,
}