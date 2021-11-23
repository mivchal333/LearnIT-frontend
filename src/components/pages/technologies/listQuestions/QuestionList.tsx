import React, {useEffect, useState} from 'react'
import {List, Paper} from "@material-ui/core";
import QuestionListItem from "./QuestionListItem";
import {useSelector} from "../../../../store/store";
import {selectTechnologyContextId} from "../../../../store/technologies/technologies.slice";
import QuestionRepository from "../../../../api/repository/questions.repository";
import {QuestionPreview} from "../../../../api/model/questionPreview.model";
import {isNil} from "lodash-es";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(3)
    }
}));

const QuestionList = () => {
    const [questions, setQuestions] = useState<QuestionPreview[]>([])
    const technologyId = useSelector(selectTechnologyContextId) || 0
    const classes = useStyles();

    useEffect(() => {
        const loadQuestions = async () => {
            const {data} = await QuestionRepository.getQuestionsByTechnology(technologyId);
            setQuestions(data)
        }

        if (!isNil(technologyId)) {
            loadQuestions()
        }
    }, [technologyId])


    return (
        <Paper className={classes.paper}>
            <List>
                {questions.map(question => (
                    <QuestionListItem question={question} key={question.id}/>
                ))}
            </List>
        </Paper>
    )
}
export default QuestionList