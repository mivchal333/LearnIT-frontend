import React from 'react'
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import {UserModel} from "../../../../api/model/user.model";

interface PropsType {
    user: UserModel
}

class AccountListItem extends React.Component<PropsType> {
    render() {
        const {user} = this.props
        return (
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <Avatar/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={`${user.firstName} ${user.lastName}`}
                    secondary={user.email}/>
            </ListItem>
        )
    }
}
export default AccountListItem
