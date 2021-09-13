import React from "react";
import {useSelector} from "react-redux";
import {selectProgress} from "../../../store/game/game.slice";
import {Chip} from "@material-ui/core";

const ProgressTracker = () => {
    const progress = useSelector(selectProgress);

    return (
        <Chip label={`${progress.actual + 1} of ${progress.total}`}/>
    )
}
export default ProgressTracker