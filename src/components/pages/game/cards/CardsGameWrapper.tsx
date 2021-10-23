import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {CircularProgress, makeStyles, Paper, Typography} from "@material-ui/core";
import KnownButton from "./KnownButton";
import NextCardButton from "./NextCardButton";
import ProgressTracker from "../common/ProgressTracker";
import GameFinishedCard from "../common/GameFinishedCard";
import {resetCurrentCard, selectCurrentCard, selectIsFlipped, setIsFlipped} from "../../../../store/cards/cards.slice";
import {resetGameState, selectIsFinished} from "../../../../store/game/game.slice";
import {useDispatch} from "../../../../store/store";
import {loadCard, notKnowItAction} from "../../../../store/cards/card.actions";


const useStyles = makeStyles((theme: any) => ({
    paper: {
        width: '30em',
        height: '30em',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
    },
    cardBody: {
        fontSize: theme.typography.pxToRem(22),
        fontWeight: theme.typography.fontWeightRegular,
    },
    cardAnswer: {
        fontSize: theme.typography.pxToRem(16),
        fontWeight: theme.typography.fontWeightMedium,
    },
}));


const CardsGameWrapper = () => {
    const classes = useStyles();
    const card = useSelector(selectCurrentCard);
    const isFlipped = useSelector(selectIsFlipped);
    const isFinished = useSelector(selectIsFinished);

    const dispatch = useDispatch();
    const [isAnswerShowed, setIsAnswerShowed] = useState(false)
    useEffect(() => {
        dispatch(loadCard())
        return () => {
            dispatch(resetCurrentCard())
            dispatch(resetGameState())
        }
    }, [])

    useEffect(() => {
        setIsAnswerShowed(false)
    }, [card])

    const onClick = () => {
        const targetIsFlipped = !isFlipped
        dispatch(setIsFlipped(targetIsFlipped))
        const isFirstFlip = targetIsFlipped && !isAnswerShowed;
        if (isFirstFlip) {
            setIsAnswerShowed(true)
            dispatch(notKnowItAction())
        }
    }


    if (!card) {
        return <CircularProgress/>
    }
    if (isFinished) {
        return <GameFinishedCard/>
    }

    return (
        <div>
            <ProgressTracker/>
            <Paper elevation={3} className={classes.paper} onClick={onClick}>
                {!isFlipped
                    ? <Typography className={classes.cardBody}>{card.body}</Typography>
                    : <Typography className={classes.cardAnswer}>{card.answer.body}</Typography>
                }
            </Paper>
            {!isAnswerShowed
                ? <KnownButton/>
                : <NextCardButton/>
            }

        </div>
    )

}
export default CardsGameWrapper