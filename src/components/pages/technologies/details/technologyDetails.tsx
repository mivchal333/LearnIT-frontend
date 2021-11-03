import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {isEmpty, toNumber} from "lodash-es";
import {Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "../../../../store/store";
import {selectTechnology, setTechnologyContextId} from "../../../../store/technologies/technologies.slice";
import {TechnologyRouteParam} from "../../../../route/route.model";
import {fetchTechnology} from "../../../../store/technologies/actions";
import {Modal} from "../../../../store/shared/page/modal.model";
import {showModal} from "../../../../store/shared/page/page.slice";
import ActionButtonGroup from "./ActionButtonGroup";
import Chip from '@material-ui/core/Chip';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "70vw",
        height: "80vh",
        padding: "3em",
    },
    title: {
        fontSize: 14,
    },
    description: {
        marginBottom: 12,
        wordBreak: "break-word"
    },
    cardMedia: {
        width: '300px',
        height: '300px',
        display: "flex",
    },
    footer: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: "auto",

    },
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

    const showConfirm = (modal: Modal) => {
        dispatch(showModal(modal))
    }

    return (
        <Card className={classes.root}>
            <ActionButtonGroup/>

            {technology.image && (
                <CardMedia
                    className={classes.cardMedia}
                    image={technology.image?.fileUrl}
                />
            )}
            <CardContent>
                <Typography variant="h5" component="h2">
                    {technology.name}
                </Typography>
                <Typography className={classes.description} color="textSecondary">
                    {technology.description}
                </Typography>
                <Chip label={`${technology.questionCount} Questions`}/>

            </CardContent>
            {technology.questionCount > 0 && (
                <CardActions className={classes.footer}>
                    <Button onClick={() => showConfirm(Modal.START_QUIZ)} startIcon={<RadioButtonCheckedIcon/>}>PLAY
                        QUIZ!</Button>
                    <Button onClick={() => showConfirm(Modal.START_CARDS)} startIcon={<ViewCarouselIcon/>}>PLAY
                        CARDS!</Button>
                </CardActions>
            )}
        </Card>
    )
}
export default TechnologyDetails