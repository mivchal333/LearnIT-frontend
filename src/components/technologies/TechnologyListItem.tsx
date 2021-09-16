import React from "react";
import {Button, Card, CardActions, CardContent, makeStyles, Typography} from "@material-ui/core";
import {Technology} from "../../api/model/Technology.model";
import {GET_ROUTE} from "../../route/routes";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: '30em',
        marginBottom: "2em",
        marginLeft: '1em',
        marginTop: '1em',
        backgroundColor: theme.palette.grey[100],
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

interface PropsType {
    technology: Technology,
}

const TechnologyListItem = (props: PropsType) => {
    const classes = useStyles();

    const {technology} = props
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {technology.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {technology.description}
                </Typography>

            </CardContent>
            <CardActions>
                <Button to={GET_ROUTE.TECHNOLOGY(technology.id)} component={Link}>View</Button>
            </CardActions>
        </Card>
    )
}
export default TechnologyListItem