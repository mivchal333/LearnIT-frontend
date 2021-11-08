import React, {ReactNode} from 'react'
import {useDispatch} from "../../store/store";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import {closeModal} from "../../store/shared/page/page.slice";

interface PropsType {
    Title: ReactNode | string,
    Body?: ReactNode,
    Actions: ReactNode,
    children?: ReactNode,
}

const ModalWrapper = (props: PropsType) => {

    const dispatch = useDispatch()
    return (
        <Dialog
            open
            onClose={() => dispatch(closeModal())}
        >
            <DialogTitle>
                {props.Title}
            </DialogTitle>
            <DialogContent>
                {props.Body || props.children}
            </DialogContent>
            <DialogActions>
                {props.Actions}
            </DialogActions>
        </Dialog>
    )
}
export default ModalWrapper