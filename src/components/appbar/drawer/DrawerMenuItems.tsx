import React from "react";
import {ListItemIcon, ListItemText} from "@material-ui/core";
import DashboardIcon from '@material-ui/icons/Dashboard';
import List from "@material-ui/core/List";
import ListIcon from '@material-ui/icons/List';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import BarChartIcon from '@material-ui/icons/BarChart';
import {GET_ROUTE} from "../../../route/routes";
import LinkListItem from "./LinkListItem";
import {useSelector} from "../../../store/store";
import {selectIsAdmin, selectUserLoggedIn} from "../../../store/user/user.slice";
import PeopleIcon from '@material-ui/icons/People';

interface MenuPosition {
    title: string,
    href: string,
    icon: React.ReactNode,
}

const statistics = {
    title: "Statystyki",
    href: GET_ROUTE.STATISTICS(),
    icon: <BarChartIcon/>
};

const account = {
    title: "Moje konto",
    href: GET_ROUTE.ACCOUNT(),
    icon: <AccountBoxIcon/>
};
const configureUsers = {
    title: "Konfiguracja",
    href: GET_ROUTE.ADMIN_ACCOUNTS(),
    icon: <PeopleIcon/>
};

const basicItems: MenuPosition[] = [
    {
        title: "LearnIT",
        href: GET_ROUTE.HOME(),
        icon: <DashboardIcon/>
    },
    {
        title: "Technologie",
        href: GET_ROUTE.TECHNOLOGIES(),
        icon: <ListIcon/>
    },
]

const DrawerMenuItems = () => {
    const showList = [...basicItems];

    const userLoggedIn = useSelector(selectUserLoggedIn);
    const isAdmin = useSelector(selectIsAdmin);

    if (userLoggedIn) {
        showList.push(account, statistics)
    }

    if (isAdmin) {
        showList.push(configureUsers)
    }


    return (
        <List>
            {showList.map(listItem => (
                <LinkListItem href={listItem.href} key={listItem.title}>
                    <ListItemIcon>
                        {listItem.icon}
                    </ListItemIcon>
                    <ListItemText primary={listItem.title}/>
                </LinkListItem>
            ))}
        </List>
    )
}
export default DrawerMenuItems