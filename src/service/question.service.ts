import {CreateQuestionForm} from "../components/pages/technologies/addQuestion/AddQuestionForm";
import QuestionRepository from "../api/repository/questions.repository";
import {CreateQuestionModel} from "../api/model/createQuestionModel.model";
import {AnswerPayloadModel} from "../api/model/answerPayload.model";
import {CreateQuestionAnswerModel} from "../model/createQuestionAnswer.model";

const createQuestion = (form: CreateQuestionForm, technologyId: number) => {
    const {correctAnswer, badAnswer1, badAnswer2, badAnswer3, body, difficultyValue} = form
    const payload: CreateQuestionModel = {
        badAnswers: [
            mapToAnswerPayloadModel(badAnswer1),
            mapToAnswerPayloadModel(badAnswer2),
            mapToAnswerPayloadModel(badAnswer3),
        ],
        correctAnswer: mapToAnswerPayloadModel(correctAnswer),
        body,
        difficultyValue,
        technologyId,
    }
    return QuestionRepository.createQuestion(payload)
}

const mapToAnswerPayloadModel = (question: CreateQuestionAnswerModel): AnswerPayloadModel => ({
    body: question.body,
    code: question.codeValue,
})

export const QuestionService = {
    createQuestion,
}