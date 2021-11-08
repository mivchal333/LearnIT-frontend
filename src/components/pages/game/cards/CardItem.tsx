import React, {useState} from 'react'
import {CircularProgress, makeStyles, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectCurrentCard} from "../../../../store/cards/cards.slice";
import ReactCardFlip from 'react-card-flip';
import FlippingCardWrapper from "./FlippingCardWrapper";
import {selectIsLoading} from "../../../../store/shared/game/game.slice";
import {isNil} from "lodash-es";


const useStyles = makeStyles((theme: any) => ({
    cardContainer: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
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
const CardItem = () => {
    const classes = useStyles();
    const card = useSelector(selectCurrentCard);
    const isLoading = useSelector(selectIsLoading);
    const [isFlipped, setIsFlipped] = useState(false)

    const onFlip = () => {
        setIsFlipped(!isFlipped)
    }

    if (isLoading || isNil(card)) {
        return <CircularProgress/>
    }
    return (
        <ReactCardFlip isFlipped={isFlipped} containerClassName={classes.cardContainer}>
            <FlippingCardWrapper onFlip={onFlip}>
                <Typography className={classes.cardBody}>{card.body}</Typography>
            </FlippingCardWrapper>
            <FlippingCardWrapper onFlip={onFlip}>
                <Typography className={classes.cardAnswer}>{card.answer.body}</Typography>
            </FlippingCardWrapper>
        </ReactCardFlip>
    )
}
export default CardItem