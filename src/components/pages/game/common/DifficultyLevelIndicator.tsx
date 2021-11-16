import React from 'react'
import StarIcon from "@material-ui/icons/Star";
import {Badge} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    starIcon: {
        color: "gold",
    }
}));

interface PropsType {
    value: number
}

const DifficultyLevelIndicator = (props: PropsType) => {
    const classes = useStyles();

    return (
        <Badge badgeContent={props.value} color="primary">
            <StarIcon className={classes.starIcon} fontSize="large"/>
        </Badge>
    )
}
export default DifficultyLevelIndicator