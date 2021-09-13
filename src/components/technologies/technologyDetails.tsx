import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {TechnologyRouteParam} from "../../route/route.model";
import {selectTechnology} from "../../store/technologies/technologies.slice";
import {useSelector} from "react-redux";
import {RootState, useDispatch} from "../../store/store";
import {isEmpty, toNumber} from "lodash-es";
import {fetchTechnology} from "../../store/technologies/actions";
import {Button, Card, CardActions, CardContent, makeStyles, Typography} from "@material-ui/core";
import {GET_ROUTE} from "../../route/routes";


const useStyles = makeStyles({
    root: {
        maxWidth: '30em',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    date: {}
});

const TechnologyDetails = () => {
    const classes = useStyles();

    const dispatch = useDispatch()
    const {id} = useParams<TechnologyRouteParam>()
    let technology = useSelector((state: RootState) => selectTechnology(state, toNumber(id)));

    useEffect(() => {

        if (isEmpty(technology)) {
            dispatch(fetchTechnology(toNumber(id)))
        }
    }, [])

    if (isEmpty(technology)) {
        return <h1>Loading...</h1>
    }

    const createDate = new Date(technology.createDate);
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {technology.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {technology.description}
                </Typography>

                <Typography className={classes.date}>
                    {`Created on ${createDate.toLocaleDateString()} at ${createDate.toLocaleTimeString()}`}
                </Typography>
            </CardContent>
            <CardActions>
                <Button to={GET_ROUTE.QUIZ_START_CONFIRM(technology.id)} component={Link}>START QUIZ!</Button>
                <Button to={GET_ROUTE.CARDS_START_CONFIRM(technology.id)} component={Link}>START CARDS!</Button>
            </CardActions>
        </Card>
    )
}
export default TechnologyDetails