import React from 'react'
import {useDispatch} from "../../store/store";
import {makeStyles, Modal} from "@material-ui/core";
import {Theme} from "@material-ui/core/styles";
import {closeModal} from "../../store/shared/page/page.slice";

interface PropsType {
    children: React.ReactElement
}


const useStyles = makeStyles((theme: Theme) => ({
        paper: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            position: 'absolute',
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(2, 3, 1, 3),
            borderRadius: "15px"
        },
    }),
);

const ModalBodyWrapper = (props: PropsType) => {
    const classes = useStyles();

    const dispatch = useDispatch()
    return (
        <Modal
            open
            onClose={() => dispatch(closeModal())}
        >
            <div className={classes.paper}>
                {props.children}
            </div>
        </Modal>

    )
}
export default ModalBodyWrapper