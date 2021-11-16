import React from "react";
import {Accordion, AccordionSummary, ListItem, Typography} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {UserAttempt} from "../../../api/model/userAttempt.model";
import {Timeline} from "@material-ui/lab";
import AnswerTimelineItem from "./AnswerTimelineItem";
import {isEmpty, size} from "lodash-es";
import {formatRelative} from 'date-fns'
import pl from 'date-fns/locale/pl';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
        listItem: {
            width: '30vw'
        }
    }),
);

interface PropsTypes {
    attempt: UserAttempt
}

const AttemptSection = (props: PropsTypes) => {
    const classes = useStyles();

    if (isEmpty(props.attempt.history)) {
        return <></>
    }

    const {attempt: {history}} = props
    const relativeDate = formatRelative(props.attempt.startDate, new Date(), {locale: pl});
    return (
        <ListItem>
            <Accordion className={classes.listItem}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id={`attempt-section-${props.attempt.id}`}
                >
                    <Typography
                        className={classes.heading}>{relativeDate}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Timeline>
                        {history.map((entry, index) => {
                            const isLastItem = index === size(history) - 1;
                            return (
                                <AnswerTimelineItem
                                    key={entry.id}
                                    entry={entry}
                                    index={index + 1}
                                    isLast={isLastItem}/>
                            );
                        })}
                    </Timeline>
                </AccordionDetails>
            </Accordion>
        </ListItem>
    )
}
export default AttemptSection