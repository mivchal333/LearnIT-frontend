import React from 'react'
import {Button} from "@material-ui/core";
import {loadNextQuestionAction} from "../../../../store/quiz/quiz.actions";
import {useDispatch} from "../../../../store/store";

interface PropsType {
}

const NextQuestionButton = (props: PropsType) => {
    let dispatch = useDispatch();

    return (
        <Button
            variant="outlined"
            onClick={() => dispatch(loadNextQuestionAction())}
            color="inherit"
        >
            Następne pytanie
        </Button>
    )
}
export default NextQuestionButton