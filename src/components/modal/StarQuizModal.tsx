import React from 'react'
import {useDispatch} from "../../store/store";
import ModalBodyWrapper from "./ModalBodyWrapper";

interface PropsType {
}

const StartQuizModal = (props: PropsType) => {
    const dispatch = useDispatch()

    return (
        <ModalBodyWrapper>
            <h1>modal</h1>
        </ModalBodyWrapper>
    )
}
export default StartQuizModal