import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import {Avatar, Divider, IconButton, List} from "@material-ui/core";
import {toUpper} from "lodash-es";
import {useSelector} from "../../../store/store";
import {selectUserDetails} from "../../../store/user/user.slice";
import {deepOrange} from "@material-ui/core/colors";
import UserListItem from "./UserListItem";
import LogoutListItem from "./LogoutListItem";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        typography: {
            padding: theme.spacing(2),
        },
        avatar: {
            color: theme.palette.getContrastText(deepOrange[500]),
            backgroundColor: deepOrange[500],

        },
    }),
);

const UserActions = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const userDetails = useSelector(selectUserDetails)

    // @ts-ignore
    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const open = Boolean(anchorEl);
    return (
        <>
            <IconButton color="inherit" onClick={handleClick}>
                <Avatar
                    className={classes.avatar}
                >
                    {toUpper(userDetails?.firstName[0])}
                </Avatar>
            </IconButton>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <List component="nav" aria-label="main mailbox folders">
                    <UserListItem onClick={handleClose}/>
                    <Divider/>
                    <LogoutListItem onClick={handleClose}/>
                </List>
            </Popover>
        </>
    )
}
export default UserActions