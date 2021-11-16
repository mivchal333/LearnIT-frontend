import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {UserHistoryRepository} from "../../../api/repository/userHistory.repository";
import {isNil, size} from "lodash-es";
import AnswerTimelineItem from "../history/AnswerTimelineItem";
import {Timeline} from "@material-ui/lab";
import {UserAttempt} from "../../../api/model/userAttempt.model";
import {CircularProgress, makeStyles, Paper} from "@material-ui/core";
import {SummaryPageRouteParam} from "../../../route/route.model";

const useStyles = makeStyles((theme: any) => ({
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
    },
}));
const SummaryPage = () => {
    const classes = useStyles();
    const {id} = useParams<SummaryPageRouteParam>();
    const [attempt, setAttempt] = useState<UserAttempt | null>(null);

    useEffect(() => {
        const loadAttempt = async () => {

            try {
                const {data} = await UserHistoryRepository.getUserAttempt(id)
                setAttempt(data)
            } catch (e) {
                console.error(e)
            }
        }

        loadAttempt();
    }, [id])

    if (isNil(attempt)) {
        return <CircularProgress/>
    }

    const {history = []} = attempt
    return (
        <Paper className={classes.paper}>
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
            </Timeline></Paper>
    )
}
export default SummaryPage