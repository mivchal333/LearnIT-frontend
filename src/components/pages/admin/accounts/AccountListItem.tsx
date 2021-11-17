import React from 'react'
import {UserDetails} from "../../../../api/model/userDetails";
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";

interface PropsType {
    user: UserDetails
}

const AccountListItem = (props: PropsType) => {
    const {user} = props
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <Avatar/>
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={user.firstName + " " + user.lastName} secondary={user.email}/>
        </ListItem>
    )
}
export default AccountListItem