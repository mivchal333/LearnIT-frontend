import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {Grid, makeStyles, Paper} from "@material-ui/core";
import ProgressTracker from "../common/ProgressTracker";
import {useDispatch} from "../../../../store/store";
import {loadCard} from "../../../../store/cards/card.actions";
import {resetGameState, selectIsLoading} from "../../../../store/shared/game/game.slice";
import {useRequireUserAttempt} from "../../../../hooks/useRequireUserAttempt";
import {usePathTechnologyContext} from "../../../../hooks/usePathTechnologyContext";
import TechnologyHeader from "../common/TechnologyHeader";
import CardItem from "./CardItem";
import KnowButton from "./button/KnowButton";
import ForgotButton from "./button/ForgotButton";
import {resetCurrentCard} from "../../../../store/cards/cards.slice";


const useStyles = makeStyles((theme: any) => ({
    paper: {
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


const CardsGamePage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    usePathTechnologyContext()
    useRequireUserAttempt()

    useEffect(() => {
        dispatch(loadCard())

        return () => {
            dispatch(resetCurrentCard())
            dispatch(resetGameState())
        }
    }, [dispatch])



    return (
        <div>
            <TechnologyHeader/>
            <Paper elevation={3} className={classes.paper}>
                <Grid container justifyContent="space-between" direction="row-reverse" spacing={4}>
                    <Grid item>
                        <ProgressTracker/>
                    </Grid>
                    <Grid item>
                        <CardItem/>
                        <Grid container justifyContent="space-between">
                            <Grid item>
                                <KnowButton/>
                            </Grid>
                            <Grid item>
                                <ForgotButton/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )

}
export default CardsGamePage