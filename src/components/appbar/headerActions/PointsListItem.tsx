import React from 'react'
import {Chip, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {useSelector} from "../../../store/store";
import {useHistory} from "react-router-dom";
import {GET_ROUTE} from "../../../route/routes";
import {selectUserDetails} from "../../../store/user/user.slice";


interface PropsType {
    onClick: () => void
}

const PointsListItem = (props: PropsType) => {

    const user = useSelector(selectUserDetails);

    const history = useHistory();

    const onClick = () => {
        props.onClick()
        history.push(GET_ROUTE.ACCOUNT())
    }

    return (
        <ListItem button onClick={onClick}>
            <ListItemIcon>
                <Chip label={user.points}/>
            </ListItemIcon>
            <ListItemText primary="Punkty"/>
        </ListItem>
    )
}
export default PointsListItem