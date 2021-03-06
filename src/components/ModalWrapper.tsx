import React from "react";
import {useSelector} from "../store/store";
import StartCardsModal from "./modal/StartCardsModal";
import StartQuizModal from "./modal/StarQuizModal";
import {Modal} from "../store/shared/page/modal.model";
import {selectModal} from "../store/shared/page/page.slice";
import GameFinishedModal from "./pages/game/common/GameFinishedModal";


const modalStrategy = {
    [Modal.START_CARDS]: <StartCardsModal/>,
    [Modal.START_QUIZ]: <StartQuizModal/>,
    [Modal.GAME_FINISHED]: <GameFinishedModal/>,
}


const ModalWrapper = () => {
    const modal: Modal | undefined = useSelector(selectModal);


    return modal
        ? modalStrategy[modal]
        : null;
}
export default ModalWrapper