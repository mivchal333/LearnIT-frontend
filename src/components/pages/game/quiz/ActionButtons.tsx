import React, {useState} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "../../../../store/store";
import {submitAnswer} from "../../../../store/quiz/quiz.actions";
import {Button, CircularProgress, Grid, Typography} from "@material-ui/core";
import {selectAnswerResult, selectQuestion} from "../../../../store/quiz/quiz.slice";
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import {green, red} from "@material-ui/core/colors";
import {isNil} from "lodash-es";

const useStyles = makeStyles((theme) => ({
    buttonContainer: {
        display: 'flex'
    },
    header: {
        paddingBottom: theme.spacing(3)
    },
    wrongAnswerIndicator: {
        backgroundColor: red["300"],
    },
    correctAnswerIndicator: {
        backgroundColor: green["300"],
    },
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
        <Typography variant="subtitle2" className={classes.header}>Select answer</Typography>
        <Grid container spacing={4}>
            {question.answers.map(answer => {
                const buttonClassName = clsx({
                    [classes.wrongAnswerIndicator]: answer.id === submittedAnswerId && !answerResult?.correct,
                    [classes.correctAnswerIndicator]: answer.id === submittedAnswerId && answerResult?.correct
                });
                return (
                    <Grid item xs={6} justifyContent="center" className={classes.buttonContainer}>
                        <Button
                            variant="outlined"
                            onClick={() => onSubmit(answer.id)}
                            className={buttonClassName}
                            disabled={!isNil(submittedAnswerId)}
                        >
                            {answer.body}
                        </Button>
                    </Grid>
                );
            })}
        </Grid>
    </div>
}
export default ActionButtons