import React from "react";
import {ListItemIcon, ListItemText} from "@material-ui/core";
import DashboardIcon from '@material-ui/icons/Dashboard';
import List from "@material-ui/core/List";
import ListIcon from '@material-ui/icons/List';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import BarChartIcon from '@material-ui/icons/BarChart';
import {GET_ROUTE} from "../../../route/routes";
import LinkListItem from "./LinkListItem";


interface MenuPosition {
    title: string,
    href: string,
    icon: React.ReactNode,
}

const menuListItems: MenuPosition[] = [
    {
        title: "Dashboard",
        href: GET_ROUTE.HOME(),
        icon: <DashboardIcon/>
    },
    {
        title: "Technologies",
        href: GET_ROUTE.TECHNOLOGIES(),
        icon: <ListIcon/>
    },
    {
        title: "Statistics",
        href: GET_ROUTE.STATISTICS(),
        icon: <BarChartIcon/>
    },
    {
        title: "Account",
        href: GET_ROUTE.ACCOUNT(),
        icon: <AccountBoxIcon/>
    }
]

const DrawerMenuItems = () => (
    <List>
        {menuListItems.map(listItem => (
            <LinkListItem href={listItem.href} key={listItem.title}>
                <ListItemIcon>
                    {listItem.icon}
                </ListItemIcon>
                <ListItemText primary={listItem.title}/>
            </LinkListItem>
        ))}
    </List>
)
export default DrawerMenuItems