import React from "react";
import {Link} from "react-router-dom";
import {ListItem} from "@material-ui/core";

interface PropsType {
    href: string,
    children: React.ReactNode,
}

const LinkListItem = (props: PropsType) => (
    <ListItem button to={props.href}
              component={Link}
    >
        {props.children}
    </ListItem>)
export default LinkListItem