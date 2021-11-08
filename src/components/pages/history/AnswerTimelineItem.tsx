import React from "react";
import {
    TimelineConnector,
    TimelineContent,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@material-ui/lab";
import {HistoryEntry} from "../../../api/model/historyEntry.model";
import {makeStyles} from "@material-ui/core/styles";
import {colors, Paper, Typography} from "@material-ui/core";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles((theme) => ({
        greenDot: {
            color: colors.green["400"],
        },
        redDot: {
            color: colors.red["400"]
        },
        paper: {
            padding: theme.spacing(1)
        },
        timelineOppositeContent: {
            flex: 0,
            minHeight: "100px",
        },
        timelineSeparator: {
            marginTop: "5px",
        }
    }),
);

interface PropsType {
    entry: HistoryEntry,
    isLast?: boolean,
    index: number,
}

const AnswerTimelineItem = (props: PropsType) => {
    const classes = useStyles();


    return (
        <TimelineItem>
            <TimelineOppositeContent className={classes.timelineOppositeContent}>
                <Typography color="textSecondary">{props.index}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator className={classes.timelineSeparator}>
                {props.entry.answerResult
                    ? (
                        <CheckCircleOutlineIcon className={classes.greenDot}/>
                    )
                    : (
                        <HighlightOffIcon className={classes.redDot}/>
                    )}
                {!props.isLast && <TimelineConnector/>}
            </TimelineSeparator>
            <TimelineContent>
                <Paper elevation={2} className={classes.paper}>
                    <Typography>{props.entry.question.body}</Typography>
                </Paper>
                <Typography>
                </Typography>
            </TimelineContent>
        </TimelineItem>
    )
}
export default AnswerTimelineItem