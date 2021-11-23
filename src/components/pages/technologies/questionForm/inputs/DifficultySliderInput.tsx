import React from 'react'
import {createStyles, Grid, makeStyles, Typography} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import Slider from "@material-ui/core/Slider";
import {toNumber} from "lodash-es";
import {Theme} from "@material-ui/core/styles";

const DIFFICULTIES = [
    {
        value: 1,
        label: "Początkujący"
    },
    {
        value: 2,
        label: "Łatwy"
    },
    {
        value: 3,
        label: "Średni"
    },
    {
        value: 4,
        label: "Trudny"
    },
    {
        value: 5,
        label: "Ekspert"
    },
]

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        inputContainer: {
            display: 'flex',
            alignItems: 'center'
        },
        starIcon: {
            color: 'gold',
        }
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
                Stopień trudności
            </Typography>
            <Grid container spacing={7}>
                <Grid item>
                    <StarIcon className={classes.starIcon}/>
                </Grid>
                <Grid item xs={8}>
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
                    <StarIcon fontSize="large" className={classes.starIcon}/>
                </Grid>
            </Grid>
        </>)
}
export default DifficultySliderInput