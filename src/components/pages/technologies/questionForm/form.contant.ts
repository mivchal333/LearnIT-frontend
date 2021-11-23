import {QuestionFormModel} from "./QuestionFormModel";
import {AnswerType} from "./inputs/AnswerSection";

export const initialValues: QuestionFormModel = {
    body: "",
    correctAnswer: {
        addCode: false,
        body: '',
    },
    difficultyValue: 1,
    badAnswer1: {
        body: '',
        addCode: false,
    },
    badAnswer2: {
        body: '',
        addCode: false,
    },
    badAnswer3: {
        body: '',
        addCode: false,
    },
    addCodeAttachment: false,
}

type AnswerName = "correctAnswer" | "badAnswer1" | "badAnswer2" | "badAnswer3";

export interface Answer {
    label: string,
    name: AnswerName,
    type: AnswerType,
}

export const answers: Answer[] = [
    {
        label: "Poprawna odpowiedź",
        name: "correctAnswer",
        type: AnswerType.CORRECT,
    },
    {
        label: "Zła odpowiedź",
        name: "badAnswer1",
        type: AnswerType.WRONG,
    },
    {
        label: "Zła odpowiedź",
        name: "badAnswer2",
        type: AnswerType.WRONG,
    },
    {
        label: "Zła odpowiedź",
        name: "badAnswer3",
        type: AnswerType.WRONG,
    },
]
