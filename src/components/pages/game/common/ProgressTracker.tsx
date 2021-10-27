import React from "react";
import {useSelector} from "react-redux";
import {Chip} from "@material-ui/core";
import {selectProgress} from "../../../../store/shared/game/game.slice";

const ProgressTracker = () => {
    const progress = useSelector(selectProgress);

    return (
        <Chip label={`${progress.actual + 1} of ${progress.total}`}/>
    )
}
export default ProgressTracker