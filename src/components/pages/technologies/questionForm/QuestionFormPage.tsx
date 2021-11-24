import React, {useEffect, useState} from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {CircularProgress, Paper, Typography} from "@material-ui/core";
import QuestionForm, {FormType, QuestionFormModel} from "./QuestionFormModel";
import {useParams} from "react-router-dom";
import {QuestionFormRouteParam} from "../../../../route/route.model";
import {useDispatch} from "../../../../store/store";
import QuestionRepository from "../../../../api/repository/questions.repository";
import {isEmpty, isNil, toNumber} from "lodash-es";
import {AnswerFormModel} from "../../../../model/answerFormModel";
import {Answer} from "../../../../api/model/answer.model";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    title: {
        marginBottom: theme.spacing(3)
    }
}));

const QuestionFormPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {questionId} = useParams<QuestionFormRouteParam>();

    const [initialData, setInitialData] = useState<QuestionFormModel>()

    const mapAnswerToAnswerForm = (answer: Answer): AnswerFormModel => ({
        body: answer.body,
        addCode: !isEmpty(answer.code),
        codeValue: answer.code,
    })

    useEffect(() => {
        const loadQuestion = async () => {
            const {data} = await QuestionRepository.fetchQuestionById(toNumber(questionId))

            const questionForm: QuestionFormModel = {
                body: data.body,
                addCodeAttachment: !isEmpty(data.codeAttachment),
                correctAnswer: mapAnswerToAnswerForm(data.correctAnswer),
                badAnswer1: mapAnswerToAnswerForm(data.badAnswers[0]),
                badAnswer2: mapAnswerToAnswerForm(data.badAnswers[1]),
                badAnswer3: mapAnswerToAnswerForm(data.badAnswers[2]),
                codeAttachment: data.codeAttachment,
                codeLang: data.codeLang,
                difficultyValue: data.difficulty
            }
            setInitialData(questionForm)
        }
        if (!isNil(questionId)) {
            loadQuestion()
        }
    }, [])

    let formType: FormType = FormType.ADD
    if (!isNil(questionId)) {
        formType = FormType.EDIT
    }

    if (formType === FormType.EDIT && isNil(initialData)) {
        return <CircularProgress/>
    }

    return <>
        <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center" className={classes.title}>
                {formType === FormType.ADD
                    ? "Dodaj pytanie"
                    : "Edytuj pytanie"
                }
            </Typography>
            <div>
                <QuestionForm formType={formType} initialData={initialData}/>
            </div>
        </Paper>
    </>
}
export default QuestionFormPage