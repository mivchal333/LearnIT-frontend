import React, {useState} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "../../../../store/store";
import {submitAnswer} from "../../../../store/quiz/quiz.actions";
import {CircularProgress, Grid, Paper, Typography} from "@material-ui/core";
import {selectAnswerResult, selectQuestion} from "../../../../store/quiz/quiz.slice";
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import {green, red} from "@material-ui/core/colors";
import {isNil} from "lodash-es";
import CodePreview from "../common/CodePreview";

const useStyles = makeStyles((theme) => ({
    header: {
        paddingBottom: theme.spacing(3)
    },
    wrongAnswerIndicator: {
        backgroundColor: red["300"],
    },
    correctAnswerIndicator: {
        backgroundColor: green["300"],
    },
    answerPaper: {
        padding: theme.spacing(2),
        cursor: "pointer",
    }

}));

const ActionButtons = () => {
    const classes = useStyles();
    const question = useSelector(selectQuestion);
    const answerResult = useSelector(selectAnswerResult)
    const dispatch = useDispatch()

    const [submittedAnswerId, setSubmittedAnswerId] = useState<number | null>(null)


    const onSubmit = (answerId: number) => {
        setSubmittedAnswerId(answerId)
        dispatch(submitAnswer(answerId))
    }

    if (isNil(question)) {
        return <CircularProgress/>
    }


    return <div>
        <Typography variant="subtitle2" className={classes.header}>Wybierz odpowiedź</Typography>
        <Grid container spacing={6}>
            {question.answers.map(answer => {
                const answerIndicatorClassname = clsx({
                    [classes.wrongAnswerIndicator]: answer.id === submittedAnswerId && answerResult?.correct == false,
                    [classes.correctAnswerIndicator]: answer.id === submittedAnswerId && answerResult?.correct == true,
                    [classes.answerPaper]: true,
                });
                return (

                    <Grid item xs={6} justifyContent="center">
                        <Paper elevation={4} className={answerIndicatorClassname} onClick={() => onSubmit(answer.id)}>
                            <Grid container spacing={2} direction="column">
                                <Grid item>
                                    <Typography variant="h5">
                                        {answer.body}
                                    </Typography>
                                </Grid>
                                {answer.code && (
                                    <Grid item>
                                        <CodePreview
                                            code={answer.code}
                                            lang={question.codeLang}
                                        />
                                    </Grid>
                                )}
                            </Grid>
                        </Paper>
                    </Grid>
                );
            })}
        </Grid>
    </div>
}
export default ActionButtons