import React from "react";
import {Accordion, AccordionSummary, ListItem, Typography} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {UserAttempt} from "../../../api/model/userAttempt.model";
import {Timeline} from "@material-ui/lab";
import AnswerTimelineItem from "./AnswerTimelineItem";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
    }),
);

interface PropsTypes {
    attempt: UserAttempt
}

const AttemptSection = (props: PropsTypes) => {
    const classes = useStyles();

    const startDate = new Date(props.attempt.startDate);

    return (
        <ListItem>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id={`attempt-section-${props.attempt.id}`}
                >
                    <Typography className={classes.heading}>Started
                        on {startDate.toLocaleDateString()} at {startDate.toLocaleTimeString()}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Timeline>
                        {props.attempt.history.map(entry => (
                            <AnswerTimelineItem entry={entry}/>
                        ))}
                    </Timeline>
                </AccordionDetails>
            </Accordion>
        </ListItem>

    )
}
export default AttemptSection