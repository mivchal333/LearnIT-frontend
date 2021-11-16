import React, {useEffect} from "react";
import {Card, CardContent, List, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "../../../store/store";
import {selectUserAttemptsByTechnologyId} from "../../../store/history/history.slice";
import useLoadHistory from "../../../hooks/useLoadHistory";
import AttemptSection from "./AttemptSection";
import {isEmpty, map} from "lodash-es";
import {selectTechnologyContextId} from "../../../store/technologies/technologies.slice";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {loadUserCurrentHistory} from "../../../store/history/actions";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: '30em',
            backgroundColor: theme.palette.background.paper,
            position: 'relative',
            overflow: 'auto',
            maxHeight: "60em",
        },
        listSection: {
            backgroundColor: 'inherit',
        },
        ul: {
            backgroundColor: 'inherit',
            padding: 0,
        },
    }),
);

const UserHistory = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUserCurrentHistory())
    }, [])

    const technologyId = useSelector(selectTechnologyContextId);
    useLoadHistory()
    const userAttempts = useSelector((state) => selectUserAttemptsByTechnologyId(state, technologyId))

    if (isEmpty(userAttempts)) {
        return null
    }
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h6">
                    Ostatnia historia
                </Typography>
                <List>
                    {map(userAttempts, userAttempt => (
                        <AttemptSection attempt={userAttempt} key={userAttempt.id}/>
                    ))}
                </List>
            </CardContent>
        </Card>
    )
}
export default UserHistory