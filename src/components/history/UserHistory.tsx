import React from "react";
import {Card, List} from "@material-ui/core";
import {useSelector} from "../../store/store";
import {selectUserAttempts} from "../../store/history/history.slice";
import useLoadHistory from "../../hooks/useLoadHistory";
import AttemptSection from "./AttemptSection";
import {map} from "lodash-es";
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

    return (
        <Card className={classes.root}>
            <List>
                {map(userAttempts, userAttempt => (
                    <AttemptSection attempt={userAttempt}/>
                ))}
            </List>
        </Card>
    )
}
export default UserHistory