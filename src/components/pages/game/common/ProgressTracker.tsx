import React from "react";
import {useSelector} from "react-redux";
import {Chip} from "@material-ui/core";
import {selectProgress} from "../../../../store/shared/game/game.slice";
import {isNil} from "lodash-es";

const ProgressTracker = () => {
    const progress = useSelector(selectProgress);

    if (isNil(progress.actual)) {
        return <></>
    }
    return (
        <Chip label={`${progress.actual + 1} of ${progress.total}`}/>
    )
}
export default ProgressTracker