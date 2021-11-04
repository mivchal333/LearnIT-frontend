import React from "react";
import UserHistory from "../../history/UserHistory";
import TechnologyDetails from "./technologyDetails";
import {Grid, makeStyles} from "@material-ui/core";


const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "space-between"
    },
});

const TechnologyDetailsPage = () => {
    const classes = useStyles();

    return (
        <Grid container justifyContent="space-between" spacing={5}>
            <Grid item xs={8}>
                <TechnologyDetails/>
            </Grid>
            <Grid item xs={4}>
                <UserHistory/>
            </Grid>
        </Grid>
    )
}
export default TechnologyDetailsPage