import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import NextQuestionButton from "../common/NextQuestionButton";

const SuccessAnswerMessage = () => {
    return (
        <MuiAlert
            elevation={1}
            variant="filled"
            severity="success"
            action={<NextQuestionButton/>}
        >
            Correct answer
        </MuiAlert>

    )
}
export default SuccessAnswerMessage