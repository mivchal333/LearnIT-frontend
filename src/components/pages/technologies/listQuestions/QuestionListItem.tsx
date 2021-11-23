import React from 'react'
import {QuestionPreview} from "../../../../api/model/questionPreview.model";
import {Button, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {useHistory} from "react-router-dom";
import {GET_ROUTE} from "../../../../route/routes";
import {usePathTechnologyContext} from "../../../../hooks/usePathTechnologyContext";

interface PropsType {
    question: QuestionPreview,
}

const QuestionListItem = (props: PropsType) => {
    const history = useHistory();
    const {question} = props

    const [, technologyId] = usePathTechnologyContext();

    const onClick = (questionId: number) => {
        history.push(GET_ROUTE.TECHNOLOGY_QUESTION_EDIT(technologyId, questionId))
    }

    return (
        <ListItem>
            <ListItemIcon>
                <HelpOutlineIcon/>
            </ListItemIcon>
            <ListItemText primary={question.body}/>
            <Button startIcon={<EditIcon/>} variant="outlined" onClick={() => onClick(question.id)}>
                Edytuj
            </Button>
        </ListItem>
    )
}
export default QuestionListItem