import React, {useEffect, useState} from 'react'
import {List, Paper} from "@material-ui/core";
import QuestionListItem from "./QuestionListItem";
import {useDispatch, useSelector} from "../../../../store/store";
import {selectTechnologyContextId} from "../../../../store/technologies/technologies.slice";
import QuestionRepository from "../../../../api/repository/questions.repository";
import {QuestionPreview} from "../../../../api/model/questionPreview.model";
import {isNil} from "lodash-es";
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";
import {GET_ROUTE} from "../../../../route/routes";
import {deleteQuestion} from "../../../../store/technologies/actions";

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(3)
    }
}));

const QuestionList = () => {
    const [questions, setQuestions] = useState<QuestionPreview[]>([])
    const technologyId = useSelector(selectTechnologyContextId) || 0
    const history = useHistory();
    const dispatch = useDispatch()

    const classes = useStyles();

    const loadQuestions = async () => {
        const {data} = await QuestionRepository.getQuestionsByTechnology(technologyId);
        setQuestions(data)
    }

    useEffect(() => {
        if (!isNil(technologyId)) {
            loadQuestions()
        }
    }, [technologyId])

    const onEdit = (questionId: number) => {
        history.push(GET_ROUTE.TECHNOLOGY_QUESTION_EDIT(technologyId, questionId))
    }

    const onDelete = async (questionId: number) => {
        await dispatch(deleteQuestion(questionId))
        loadQuestions()
    }

    return (
        <Paper className={classes.paper}>
            <List>
                {questions.map(question => (
                    <QuestionListItem
                        question={question}
                        key={question.id}
                        onDelete={() => onDelete(question.id)}
                        onEdit={() => onEdit(question.id)}
                    />
                ))}
            </List>
        </Paper>
    )
}
export default QuestionList