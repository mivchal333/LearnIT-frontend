import React from 'react'
import {Chip, Grid, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {selectUserDetails} from "../../../store/user/user.slice";
import {useSelector} from "../../../store/store";
import Field from "./Field";
import {formatRelative} from "date-fns";
import pl from "date-fns/locale/pl";
import RolesField from "./RolesField";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3)
    },
}));

const MyAccountDetails = () => {
    const classes = useStyles();

    const user = useSelector(selectUserDetails);
    const relativeCreateDate = formatRelative(user.createDate, new Date(), {locale: pl});


    return (
        <Paper className={classes.paper}>
            <Grid container spacing={2} xs={12}>
                <Field title="Imie" value={user.firstName}/>
                <Field title="Email" value={user.lastName}/>
                <Field title="Data utworzenia" value={relativeCreateDate}/>
                <Field title="Punkty" value={<Chip label={user.points} icon={<StarIcon/>}/>}/>
                <Field title="Role" value={<RolesField roles={user.roles}/>}/>
            </Grid>

        </Paper>
    )
}
export default MyAccountDetails


