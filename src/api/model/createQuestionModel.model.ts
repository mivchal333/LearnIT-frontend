export interface CreateQuestionModel {
    body: string,
    technologyId: number,
    difficultyValue: number,
    correctAnswer: string,
    badAnswers: string[],
    codeLag?: string,
    codeAttachment?: string,
}