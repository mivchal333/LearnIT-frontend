import React from 'react'
import {ListItem, ListItemText} from "@material-ui/core";
import {logout} from "../../../store/user/actions";
import {useDispatch} from "../../../store/store";
import {useHistory} from "react-router-dom";
import {GET_ROUTE} from "../../../route/routes";

interface PropsType {
    onClick: () => void
}

const LogoutListItem = (props: PropsType) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const onLogout = () => {
        props.onClick()
        dispatch(logout())
        history.push(GET_ROUTE.HOME())
    }

    return (
        <ListItem button onClick={onLogout}>
            <ListItemText primary="Wyloguj"/>
        </ListItem>
    )
}
export default LogoutListItem