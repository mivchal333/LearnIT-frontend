import React from "react";
import {isNil} from "lodash-es";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CircularProgress,
    makeStyles,
    Typography
} from "@material-ui/core";
import {useDispatch} from "../../../../store/store";
import {Modal} from "../../../../store/shared/page/modal.model";
import {showModal} from "../../../../store/shared/page/page.slice";
import ActionButtonGroup from "./ActionButtonGroup";
import Chip from '@material-ui/core/Chip';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import {usePathTechnologyContext} from "../../../../hooks/usePathTechnologyContext";
import {EMPTY_IMAGE_PATH, getStaticImageUrl} from "../../../../service/staticProvider";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
    },
    title: {
        fontSize: 14,
    },
    description: {
        marginBottom: 12,
        wordBreak: "break-word"
    },
    cardMedia: {
        margin: theme.spacing(2),
        width: '250px',
        height: '250px',
        display: "flex",
    },
    footer: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: "auto",

    },
}));

const TechnologyDetails = () => {
    const classes = useStyles();

    const dispatch = useDispatch()
    const [technology] = usePathTechnologyContext()

    if (isNil(technology)) {
        return <CircularProgress/>
    }

    const showConfirm = (modal: Modal) => {
        dispatch(showModal(modal))

    }

    const imageUrl = technology.image?.fileUrl || getStaticImageUrl(EMPTY_IMAGE_PATH)

    return (
        <Card className={classes.root}>
            <ActionButtonGroup/>
            <CardMedia
                className={classes.cardMedia}
                image={imageUrl}
            />
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