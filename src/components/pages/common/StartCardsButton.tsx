import React from 'react'
import {Modal} from "../../../store/shared/page/modal.model";
import {Button, PropTypes} from "@material-ui/core";
import {showModal} from "../../../store/shared/page/page.slice";
import {useDispatch} from "../../../store/store";
import ViewCarouselIcon from "@material-ui/icons/ViewCarousel";

interface PropsType {
    variant?: 'text' | 'outlined' | 'contained',
    color?: PropTypes.Color
}

const StartCardsButton = (props: PropsType) => {
    const dispatch = useDispatch()

    const showConfirm = (modal: Modal) => {
        dispatch(showModal(modal))
    }
    return (
        <Button
            onClick={() => showConfirm(Modal.START_CARDS)}
            startIcon={<ViewCarouselIcon/>}
            variant={props.variant}
            color={props.color}
        >
            Zacznij Fiszki
        </Button>
    )
}
export default StartCardsButton