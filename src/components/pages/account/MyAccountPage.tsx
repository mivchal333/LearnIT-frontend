import React, {useEffect} from "react";
import MyAccountHeader from "./MyAccountHeader";
import MyAccountDetails from "./MyAccountDetails";
import {Grid} from "@material-ui/core";
import {useDispatch} from "../../../store/store";
import {loadUserDetails} from "../../../store/user/actions";

const MyAccountPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUserDetails())
    }, [])

    return (
        <Grid container spacing={3} direction="column">
            <Grid item>
                <MyAccountHeader/>
            </Grid>
            <Grid item>
                <MyAccountDetails/>
            </Grid>
        </Grid>
    )
}
export default MyAccountPage