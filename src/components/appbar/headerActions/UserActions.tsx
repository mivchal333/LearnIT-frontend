import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import {Avatar, Badge, Divider, Grid, IconButton, List, Tooltip} from "@material-ui/core";
import {toUpper} from "lodash-es";
import {useSelector} from "../../../store/store";
import {selectUserDetails} from "../../../store/user/user.slice";
import {deepOrange} from "@material-ui/core/colors";
import UserListItem from "./UserListItem";
import LogoutListItem from "./LogoutListItem";
import PointsListItem from "./PointsListItem";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        typography: {
            padding: theme.spacing(2),
        },
        avatar: {
            color: theme.palette.getContrastText(deepOrange[500]),
            backgroundColor: deepOrange[500],

        },
        starIcon: {
            color: 'gold',
        },
        pointsButton: {
            color: theme.palette.grey["600"]
        }
    }),
);

const UserActions = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const user = useSelector(selectUserDetails)

    console.error('user', user)
    // @ts-ignore
    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const open = Boolean(anchorEl);
    return (
        <div>
            <Grid container alignItems="center" spacing={2}>
                <Grid item>

                    <Tooltip title={`Masz ${user.points} punktów`}>
                        <Badge badgeContent={user.points} color="secondary">
                            <StarIcon className={classes.starIcon} fontSize="large"/>
                        </Badge>
                    </Tooltip>
                </Grid>
                <Grid item>
                    <IconButton color="inherit" onClick={handleClick}>
                        <Avatar
                            className={classes.avatar}
                        >
                            {toUpper(user.firstName[0])}
                        </Avatar>
                    </IconButton>
                </Grid>
            </Grid>
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
                    <PointsListItem onClick={handleClose}/>
                    <Divider/>
                    <LogoutListItem onClick={handleClose}/>
                </List>
            </Popover>
        </div>

    )
}
export default UserActions