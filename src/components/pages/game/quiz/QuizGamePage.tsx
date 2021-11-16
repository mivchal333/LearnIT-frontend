import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {selectQuestion} from "../../../../store/quiz/quiz.slice";
import {useDispatch} from "../../../../store/store";
import {loadQuestion} from "../../../../store/quiz/quiz.actions";
import AnswerButtons from "./ActionButtons";
import {CircularProgress, Grid, Paper, Typography} from "@material-ui/core";
import ProgressTracker from "../common/ProgressTracker";
import {makeStyles} from "@material-ui/core/styles";
import {isNil} from "lodash-es";
import AnswerResult from "./AnswerResult";
import {useRequireUserAttempt} from "../../../../hooks/useRequireUserAttempt";
import CodePreview from "../common/CodePreview";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    title: {
        padding: theme.spacing(3)
    },
    answersSection: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    }
}));

const QuizGamePage = () => {
    const classes = useStyles();
    const question = useSelector(selectQuestion);
    const dispatch = useDispatch();

    useRequireUserAttempt()

    useEffect(() => {
        dispatch(loadQuestion())
        return () => {
            // dispatch(resetGameState())
            // dispatch(resetActualQuestion())
        }
    }, [])


    if (isNil(question)) {
        return <CircularProgress/>
    }

    return (
        <div>
            <Paper className={classes.paper}>
                <Grid container justifyContent="space-between" direction="row-reverse" spacing={4}>
                    <Grid item>
                        <ProgressTracker/>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2">Pytanie</Typography>
                        <Typography variant="h4">{question.body}</Typography>
                        {question.codeAttachment && (
                            <>
                                <Typography variant="subtitle2">Kod</Typography>
                                <CodePreview
                                    code={question.codeAttachment}
                                    lang={question.codeLang}
                                />
                            </>
                        )}
                    </Grid>
                </Grid>
                <div className={classes.answersSection}>
                    <AnswerButtons/>
                </div>
                <AnswerResult/>
            </Paper>
        </div>
    )
}
export default QuizGamePage