import React from 'react'
import {QuestionPreview} from "../../../../api/model/questionPreview.model";
import {
    Button,
    ButtonGroup,
    Chip,
    createStyles,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles
} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import DeleteIcon from "@material-ui/icons/Delete";
import FaceIcon from '@material-ui/icons/Face';
import {Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        creatorChip: {
            margin: theme.spacing(0, 2, 0, 2)
        }
    }),
);


interface PropsType {
    question: QuestionPreview,
    onEdit: () => void,
    onDelete: () => void,
    onSetPublished: () => void,
}

const QuestionListItem = (props: PropsType) => {
    const {question} = props
    const classes = useStyles();

    return (
        <ListItem>
            <ListItemIcon>
                <HelpOutlineIcon/>
            </ListItemIcon>
            <ListItemText primary={question.body}/>
            <div className={classes.creatorChip}>
                {question.creatorEmail && (
                    <Chip
                        icon={<FaceIcon/>}
                        label={question.creatorEmail}
                    />
                )}
            </div>
            <ButtonGroup>
                <Button onClick={props.onSetPublished}>
                    {question.published
                        ? "Ukryj"
                        : "Publikuj"
                    }
                </Button>
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