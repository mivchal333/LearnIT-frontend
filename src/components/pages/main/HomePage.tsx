import React from 'react';
import LearningBanner from "./LearningBanner";
import AdvantageCard from "./AdvantageCard";
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


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
                <AdvantageCard/>
                <AdvantageCard/>
                <AdvantageCard/>
            </Paper>
        </div>
    );
}
export default HomePage;