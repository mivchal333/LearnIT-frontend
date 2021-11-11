import React from "react";
import {Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";
import {Technology} from "../../../../api/model/technology.model";
import {GET_ROUTE} from "../../../../route/routes";
import {Link} from "react-router-dom";
import {EMPTY_IMAGE_PATH, getStaticImageUrl} from "../../../../service/staticProvider";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "2em",
        marginTop: '1em',
        backgroundColor: theme.palette.grey[100],
        width: "15em"
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardActions: {
        marginTop: "auto",
        alignSelf: "center"
    }
}));

interface PropsType {
    technology: Technology,
}

const TechnologyListItem = (props: PropsType) => {
    const classes = useStyles();

    const imageUrl = props.technology.image?.fileUrl || getStaticImageUrl(EMPTY_IMAGE_PATH)

    const {technology} = props
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cardMedia}
                image={imageUrl}
            />
            <CardContent>
                <Typography variant="h5" component="h2">
                    {technology.name}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button to={GET_ROUTE.TECHNOLOGY(technology.id)} component={Link}>View</Button>
            </CardActions>
        </Card>
    )
}
export default TechnologyListItem