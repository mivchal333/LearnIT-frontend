import React from 'react';
import LearningBanner from "./LearningBanner";
import AdvantageCard1 from "./AdvantageCard1";
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import AdvantageCard2 from "./AdvantageCard2";
import AdvantageCard3 from "./AdvantageCard3";


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
        marginTop: theme.spacing(3),
    },
}));

const HomePage = () => {
    const classes = useStyles();


    return (
        <div>
            <LearningBanner/>
            <Paper className={classes.paper}>
                <AdvantageCard1/>
                <AdvantageCard2/>
                <AdvantageCard3/>
            </Paper>
        </div>
    );
}
export default HomePage;