import {CreateQuestionForm} from "../components/pages/technologies/addQuestion/AddQuestionForm";
import QuestionRepository from "../api/repository/questions.repository";
import {CreateQuestionModel} from "../api/model/createQuestionModel.model";

const createQuestion = (form: CreateQuestionForm, technologyId: number) => {
    const {correctAnswer, badAnswer1, badAnswer2, badAnswer3, body, difficultyValue} = form
    const payload: CreateQuestionModel = {
        badAnswers: [
            badAnswer1,
            badAnswer2,
            badAnswer3,
        ],
        correctAnswer,
        body,
        difficultyValue,
        technologyId,
    }

    return QuestionRepository.createQuestion(payload)
}

export const QuestionService = {
    createQuestion,
}