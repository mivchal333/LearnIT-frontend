import React from 'react'
import {createStyles, Grid, makeStyles, Typography} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import Slider from "@material-ui/core/Slider";
import {toNumber} from "lodash-es";
import {Theme} from "@material-ui/core/styles";

const DIFFICULTIES = [
    {
        value: 1,
        label: "Beginner"
    },
    {
        value: 2,
        label: "Easy"
    },
    {
        value: 3,
        label: "Medium"
    },
    {
        value: 4,
        label: "Hard"
    },
    {
        value: 5,
        label: "Expert"
    },
]

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        inputContainer: {
            display: 'flex',
            alignItems: 'center'
        },

    }),
);

interface PropsType {
    value: number,
    onChange: (value: number) => void,
}

const DifficultySliderInput = (props: PropsType) => {
    const classes = useStyles();

    return (
        <>
            <Typography id="continuous-slider" gutterBottom>
                Difficulty
            </Typography>
            <Grid container spacing={6} className={classes.inputContainer}>
                <Grid item>
                    <StarIcon fontSize="small"/>
                </Grid>
                <Grid item xs>
                    <Slider
                        value={props.value}
                        onChange={(event, value) => props.onChange(toNumber(value))}
                        marks={DIFFICULTIES}
                        min={DIFFICULTIES[0].value}
                        step={1}
                        max={DIFFICULTIES[4].value}
                    />
                </Grid>
                <Grid item>
                    <StarIcon fontSize="large"/>
                </Grid>
            </Grid>
        </>)
}
export default DifficultySliderInput