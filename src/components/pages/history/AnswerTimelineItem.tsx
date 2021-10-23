import React from "react";
import {TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@material-ui/lab";
import {HistoryEntry} from "../../../api/model/historyEntry.model";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles<undefined, HistoryEntry>(({
        root: {
            backgroundColor: props => props.answerResult ? "green" : "red",
        },
    }),
);

interface PropsType {
    entry: HistoryEntry,
}

const AnswerTimelineItem = ({entry}: PropsType) => {
    const classes = useStyles(entry);


    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot className={classes.root}/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>{entry.question.body}</TimelineContent>
        </TimelineItem>

    )
}
export default AnswerTimelineItem