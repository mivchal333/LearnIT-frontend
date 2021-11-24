import React from 'react'
import {Button, CardActions, makeStyles} from "@material-ui/core";
import {usePathTechnologyContext} from "../../../../hooks/usePathTechnologyContext";
import {selectUserLoggedIn} from "../../../../store/user/user.slice";
import {useSelector} from "../../../../store/store";
import {GET_ROUTE} from "../../../../route/routes";
import {Link} from "react-router-dom";
import StartQuizButton from "../../common/StartQuizButton";
import StartCardsButton from "../../common/StartCardsButton";


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
    const [technology] = usePathTechnologyContext()
    const isLoggedIn = useSelector(selectUserLoggedIn);

    if (technology.questionCount < 1) {
        return <></>
    }

    return (
        <CardActions className={classes.footer}>
            {isLoggedIn
                ? (
                    <>
                        <StartQuizButton/>
                        <StartCardsButton/>
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