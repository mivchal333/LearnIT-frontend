import React from 'react'
import {QuestionPreview} from "../../../../api/model/questionPreview.model";
import {Button, ButtonGroup, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import DeleteIcon from "@material-ui/icons/Delete";

interface PropsType {
    question: QuestionPreview,
    onEdit: () => void,
    onDelete: () => void,
}

const QuestionListItem = (props: PropsType) => {
    const {question} = props

    return (
        <ListItem>
            <ListItemIcon>
                <HelpOutlineIcon/>
            </ListItemIcon>
            <ListItemText primary={question.body}/>
            <ButtonGroup>
                <Button startIcon={<EditIcon/>} onClick={props.onEdit}>
                    Edytuj
                </Button>
                <Button startIcon={<DeleteIcon/>} onClick={props.onDelete}>
                    Usuń
                </Button>
            </ButtonGroup>
        </ListItem>
    )
}
export default QuestionListItem