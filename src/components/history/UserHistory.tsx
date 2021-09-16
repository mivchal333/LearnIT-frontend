import React from "react";
import {Card, CardContent, List, Typography} from "@material-ui/core";
import {useSelector} from "../../store/store";
import {selectUserAttempts} from "../../store/history/history.slice";
import useLoadHistory from "../../hooks/useLoadHistory";
import AttemptSection from "./AttemptSection";
import {isEmpty, map} from "lodash-es";
import {selectTechnologyContextId} from "../../store/technologies/technologies.slice";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";


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

    const technologyId = useSelector(selectTechnologyContextId);
    useLoadHistory()
    const userAttempts = useSelector((state) => selectUserAttempts(state, technologyId))

    if (isEmpty(userAttempts)) {
        return null
    }
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Attempts
                </Typography>
                <List>
                    {map(userAttempts, userAttempt => (
                        <AttemptSection attempt={userAttempt}/>
                    ))}
                </List>
            </CardContent>
        </Card>
    )
}
export default UserHistory