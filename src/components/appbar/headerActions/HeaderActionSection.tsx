import React from 'react'
import {Button, makeStyles} from "@material-ui/core";
import {GET_ROUTE} from "../../../route/routes";
import {Link} from "react-router-dom";
import {selectUserLoggedIn} from "../../../store/user/user.slice";
import {useSelector} from "../../../store/store";
import {deepOrange} from "@material-ui/core/colors";
import UserActions from "./UserActions";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(0, 1),
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
}));

const HeaderActionSection = () => {
    const classes = useStyles();
    const isUserLogged = useSelector(selectUserLoggedIn)

    if (isUserLogged) {
        return <UserActions/>
    }

    return (
        <div>
            <Button
                to={GET_ROUTE.LOGIN()}
                component={Link}
                color="inherit"
                className={classes.button}
            >
                Zaloguj się
            </Button>
            <Button
                to={GET_ROUTE.REGISTER()}
                component={Link}
                color="inherit"
                variant="outlined"
                className={classes.button}
            >
                Zarejestruj się
            </Button>
        </div>
    )
}
export default HeaderActionSection