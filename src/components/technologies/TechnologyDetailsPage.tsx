import React from "react";
import UserHistory from "../history/UserHistory";
import TechnologyDetails from "./technologyDetails";
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "space-between"
    },
});

const TechnologyDetailsPage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TechnologyDetails/>
            <UserHistory/>
        </div>
    )
}
export default TechnologyDetailsPage