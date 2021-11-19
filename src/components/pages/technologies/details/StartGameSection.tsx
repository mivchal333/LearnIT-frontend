import React from 'react'
import {Button, CardActions, makeStyles} from "@material-ui/core";
import {Modal} from "../../../../store/shared/page/modal.model";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import ViewCarouselIcon from "@material-ui/icons/ViewCarousel";
import {usePathTechnologyContext} from "../../../../hooks/usePathTechnologyContext";
import {selectUserLoggedIn} from "../../../../store/user/user.slice";
import {useDispatch, useSelector} from "../../../../store/store";
import {GET_ROUTE} from "../../../../route/routes";
import {showModal} from "../../../../store/shared/page/page.slice";
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
    },
    title: {
        fontSize: 14,
    },
    description: {
        marginBottom: 12,
        wordBreak: "break-word"
    },
    cardMedia: {
        margin: theme.spacing(2),
        width: '250px',
        height: '250px',
        display: "flex",
    },
    footer: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: "auto",

    },
}));


const StartGameSection = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [technology] = usePathTechnologyContext()
    const isLoggedIn = useSelector(selectUserLoggedIn);

    const showConfirm = (modal: Modal) => {
        dispatch(showModal(modal))

    }


    if (technology.questionCount < 1) {
        return <></>
    }

    return (
        <CardActions className={classes.footer}>
            {isLoggedIn
                ? (
                    <>
                        <Button onClick={() => showConfirm(Modal.START_QUIZ)} startIcon={<RadioButtonCheckedIcon/>}>
                            Zacznij Quiz
                        </Button>
                        <Button onClick={() => showConfirm(Modal.START_CARDS)} startIcon={<ViewCarouselIcon/>}>
                            Zacznij Ficzki
                        </Button>
                    </>
                )
                : (
                    <Button component={Link} to={GET_ROUTE.LOGIN()} color="primary">
                        Zaloguj lub zarejestruj się
                    </Button>
                )}
        </CardActions>
    )
}
export default StartGameSection