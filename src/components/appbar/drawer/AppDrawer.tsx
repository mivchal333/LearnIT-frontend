import React from "react";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import {Drawer, makeStyles} from "@material-ui/core";
import DrawerMenuItems from "./DrawerMenuItems";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
}));

interface PropsType {
    isOpen: boolean,
    setOpen: (value: boolean) => void,
}

const AppDrawer = (props: PropsType) => {
    const classes = useStyles();

    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper, !props.isOpen && classes.drawerPaperClose),
            }}
            open={props.isOpen}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={() => props.setOpen(false)}>
                    <ChevronLeftIcon/>
                </IconButton>
            </div>
            <Divider/>
            <DrawerMenuItems/>
            <Divider/>
            <List></List>
        </Drawer>
    )
}
export default AppDrawer