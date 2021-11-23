import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import {UserHistoryRepository} from "../../../api/repository/userHistory.repository";
import {isNil, size} from "lodash-es";
import AnswerTimelineItem from "../history/AnswerTimelineItem";
import {Timeline} from "@material-ui/lab";
import {UserAttempt} from "../../../api/model/userAttempt.model";
import {Button, CircularProgress, makeStyles, Paper, Typography} from "@material-ui/core";
import {SummaryPageRouteParam} from "../../../route/route.model";
import {GET_ROUTE} from "../../../route/routes";

const useStyles = makeStyles((theme: any) => ({
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
    },
    title: {
        padding: theme.spacing(3)
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
        <>
            <Paper>
                <Typography variant="h4" className={classes.title}>
                    Podsumowanie
                </Typography>
            </Paper>

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
                </Timeline>
                <Button component={Link} to={GET_ROUTE.TECHNOLOGIES()} variant="outlined" color="primary">
                    Przeglądaj
                </Button>
            </Paper>
        </>
    )
}
export default SummaryPage