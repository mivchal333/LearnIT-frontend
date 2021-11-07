import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import NextQuestionButton from "../common/NextQuestionButton";

const WrongAnswerMessage = () => {

    return (
        <MuiAlert
            elevation={1}
            variant="filled"
            severity="error"
            action={<NextQuestionButton/>}
        >
            Incorrect answer
        </MuiAlert>

    )
}
export default WrongAnswerMessage