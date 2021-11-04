import React from "react";
import MuiAlert from "@material-ui/lab/Alert";

const WrongAnswerMessage = () => {

    return (
        <MuiAlert
            elevation={2}
            variant="filled"
            severity="error"
        >
            Fail! Incorrect answer
        </MuiAlert>

    )
}
export default WrongAnswerMessage