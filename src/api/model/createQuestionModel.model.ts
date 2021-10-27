export interface CreateQuestionModel {
    body: string,
    technologyId: number,
    difficulty: number,
    correctAnswer: string,
    badAnswers: string[],
}