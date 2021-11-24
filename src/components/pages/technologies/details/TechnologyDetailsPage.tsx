import React, {useEffect} from "react";
import UserHistory from "../../history/UserHistory";
import TechnologyDetails from "./technologyDetails";
import {Grid} from "@material-ui/core";
import {useDispatch, useSelector} from "../../../../store/store";
import {selectUserLoggedIn} from "../../../../store/user/user.slice";
import {resetTechnologyContextId} from "../../../../store/technologies/technologies.slice";

const TechnologyDetailsPage = () => {
    const isLoggedIn = useSelector(selectUserLoggedIn);
    const dispatch = useDispatch();
    useEffect(() => {
        return () => {
            dispatch(resetTechnologyContextId())
        }
    })

    return (
        <Grid container justifyContent="space-between" spacing={5}>
            <Grid item xs={8}>
                <TechnologyDetails/>
            </Grid>
            <Grid item xs={4}>
                {isLoggedIn && (
                    <UserHistory/>
                )}
            </Grid>
        </Grid>
    )
}
export default TechnologyDetailsPage