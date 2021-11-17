import React, {useState} from 'react'
import {Grid, makeStyles, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectCurrentCard} from "../../../../store/cards/cards.slice";
import ReactCardFlip from 'react-card-flip';
import FlippingCardWrapper from "./FlippingCardWrapper";
import CodePreview from "../common/CodePreview";
import DifficultyLevelIndicator from "../common/DifficultyLevelIndicator";


const useStyles = makeStyles((theme: any) => ({
    cardContainer: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
    },
    cardTextContent: {
        fontSize: theme.typography.pxToRem(22),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));
const CardItem = () => {
    const classes = useStyles();
    const card = useSelector(selectCurrentCard);
    const [isFlipped, setIsFlipped] = useState(false)

    const onFlip = () => {
        setIsFlipped(!isFlipped)
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} containerClassName={classes.cardContainer}>
            <FlippingCardWrapper onFlip={onFlip}>
                <Grid container direction="column" spacing={3}>
                    <Grid item>
                        <Grid container justifyContent="space-between">
                            <Grid item>
                                <Typography variant="subtitle2">Pytanie</Typography>
                            </Grid>
                            <Grid item>
                                {!isFlipped && (
                                    <DifficultyLevelIndicator value={card.difficultyValue}/>
                                )}
                            </Grid>
                        </Grid>
                        <Typography className={classes.cardTextContent}>{card.body}</Typography>
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
                        <Typography variant="subtitle2">Odpowiedź</Typography>
                        <Typography className={classes.cardTextContent}>{card.answer.body}</Typography>
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