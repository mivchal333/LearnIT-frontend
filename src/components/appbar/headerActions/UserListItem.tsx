import React from 'react'
import {Avatar, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {GET_ROUTE} from "../../../route/routes";
import {toUpper} from "lodash-es";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {deepOrange} from "@material-ui/core/colors";
import {useSelector} from "../../../store/store";
import {selectUserDetails} from "../../../store/user/user.slice";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        avatar: {
            color: theme.palette.getContrastText(deepOrange[500]),
            backgroundColor: deepOrange[500],

        },
    }),
);

interface PropsType {
    onClick: () => void
}

const UserListItem = (props: PropsType) => {
    const classes = useStyles();
    const userDetails = useSelector(selectUserDetails);
    const history = useHistory();

    const onClick = () => {
        props.onClick();
        history.push(GET_ROUTE.ACCOUNT())
    }

    return (
        <ListItem button onClick={onClick}>
            <ListItemIcon>
                <Avatar
                    className={classes.avatar}
                >
                    {toUpper(userDetails?.firstName[0])}
                </Avatar>
            </ListItemIcon>
            <ListItemText
                primary={userDetails?.firstName + " " + userDetails?.lastName}
                secondary={userDetails.email}
            />
        </ListItem>
    )
}
export default UserListItem