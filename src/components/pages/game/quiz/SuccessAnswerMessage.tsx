import React from "react";
import MuiAlert from "@material-ui/lab/Alert";

const SuccessAnswerMessage = () => {

    return (
        <MuiAlert
            variant="filled"
            severity="success"
        >
            Success! Correct answer
        </MuiAlert>

    )
}
export default SuccessAnswerMessage