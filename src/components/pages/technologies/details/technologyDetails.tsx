import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {isEmpty, toNumber} from "lodash-es";
import {Button, Card, CardActions, CardContent, makeStyles, Typography} from "@material-ui/core";
import DeleteTechnologyButton from "./DeleteTechnologyButton";
import {useDispatch, useSelector} from "../../../../store/store";
import {selectTechnology, setTechnologyContextId} from "../../../../store/technologies/technologies.slice";
import {TechnologyRouteParam} from "../../../../route/route.model";
import {fetchTechnology} from "../../../../store/technologies/actions";
import {GET_ROUTE} from "../../../../route/routes";


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
    const {id: technologyId} = useParams<TechnologyRouteParam>()
    const technologyContextId = toNumber(technologyId);

    const technology = useSelector((state) => selectTechnology(state, technologyContextId));

    useEffect(() => {
        dispatch(setTechnologyContextId(technologyContextId))
        if (isEmpty(technology)) {
            dispatch(fetchTechnology(technologyContextId))
        }
    }, [technologyId, technology])

    if (isEmpty(technology)) {
        return <h1>Loading...</h1>
    }

    const createDate = new Date(technology.createDate);
    return (
        <div className={classes.root}>
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
                    <DeleteTechnologyButton/>
                </CardActions>
            </Card>
        </div>
    )
}
export default TechnologyDetails