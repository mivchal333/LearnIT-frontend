import {QuestionFormModel} from "../components/pages/technologies/questionForm/QuestionFormModel";
import QuestionRepository from "../api/repository/questions.repository";
import {CreateQuestionModel} from "../api/model/createQuestionModel.model";
import {AnswerFormModel} from "../model/answerFormModel";
import {AnswerPayloadModel} from "../api/model/answerPayload.model";

function mapToQuestionPayload(form: QuestionFormModel) {
    const {
        correctAnswer,
        badAnswer1,
        badAnswer2,
        badAnswer3,
        body,
        difficultyValue,
        codeLang,
        codeAttachment,
        addCodeAttachment
    } = form
    const payload: CreateQuestionModel = {
        badAnswers: [
            mapToAnswerPayloadModel(badAnswer1),
            mapToAnswerPayloadModel(badAnswer2),
            mapToAnswerPayloadModel(badAnswer3),
        ],
        correctAnswer: mapToAnswerPayloadModel(correctAnswer),
        body,
        difficultyValue,
        codeLang: addCodeAttachment ? codeLang : undefined,
        codeAttachment: addCodeAttachment ? codeAttachment : undefined,
    }
    return payload;
}

const createQuestion = (form: QuestionFormModel, technologyId: number) => {
    const payload = mapToQuestionPayload(form);
    return QuestionRepository.createQuestion(technologyId, payload)
}

const editQuestion = (questionId: number, form: QuestionFormModel) => {
    const payload = mapToQuestionPayload(form);
    return QuestionRepository.putQuestion(questionId, payload)
}

const mapToAnswerPayloadModel = (answerFormModel: AnswerFormModel): AnswerPayloadModel => ({
    body: answerFormModel.body,
    code: answerFormModel.addCode ? answerFormModel.codeValue : undefined,
})

export const QuestionService = {
    createQuestion,
    editQuestion,
}