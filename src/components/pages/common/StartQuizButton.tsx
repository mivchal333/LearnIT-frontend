import React from 'react'
import {Modal} from "../../../store/shared/page/modal.model";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import {Button, PropTypes} from "@material-ui/core";
import {showModal} from "../../../store/shared/page/page.slice";
import {useDispatch} from "../../../store/store";

interface PropsType {
    variant?: 'text' | 'outlined' | 'contained',
    color?: PropTypes.Color
}

const StartQuizButton = (props: PropsType) => {
    const dispatch = useDispatch()

    const showConfirm = (modal: Modal) => {
        dispatch(showModal(modal))
    }
    return (
        <Button
            onClick={() => showConfirm(Modal.START_QUIZ)}
            startIcon={<RadioButtonCheckedIcon/>}
            variant={props.variant}
            color={props.color}
        >
            Zacznij Quiz
        </Button>
    )
}
export default StartQuizButton