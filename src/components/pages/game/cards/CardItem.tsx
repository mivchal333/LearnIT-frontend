import React, {useState} from 'react'
import {CircularProgress, Grid, makeStyles, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectCurrentCard} from "../../../../store/cards/cards.slice";
import ReactCardFlip from 'react-card-flip';
import FlippingCardWrapper from "./FlippingCardWrapper";
import {selectIsLoading} from "../../../../store/shared/game/game.slice";
import {isNil} from "lodash-es";
import CodePreview from "../common/CodePreview";


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
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <Typography className={classes.cardBody}>{card.body}</Typography>
                    </Grid>
                    {card.codeAttachment && (
                        <Grid item>
                            <CodePreview
                                code={card.codeAttachment}
                                lang={card.codeLang}
                            />
                        </Grid>
                    )}
                </Grid>
            </FlippingCardWrapper>
            <FlippingCardWrapper onFlip={onFlip}>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <Typography className={classes.cardAnswer}>{card.answer.body}</Typography>
                    </Grid>
                    <Grid item>
                        {card.answer.code && (
                            <CodePreview
                                code={card.answer.code}
                                lang={card.codeLang}
                            />
                        )}
                    </Grid>
                </Grid>
            </FlippingCardWrapper>
        </ReactCardFlip>
    )
}
export default CardItem