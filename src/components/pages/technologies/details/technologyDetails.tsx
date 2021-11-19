import React from "react";
import {isNil} from "lodash-es";
import {Card, CardContent, CardMedia, CircularProgress, makeStyles, Typography} from "@material-ui/core";
import {useSelector} from "../../../../store/store";
import ActionButtonGroup from "./ActionButtonGroup";
import Chip from '@material-ui/core/Chip';
import {usePathTechnologyContext} from "../../../../hooks/usePathTechnologyContext";
import {EMPTY_IMAGE_PATH, getStaticImageUrl} from "../../../../service/staticProvider";
import {selectIsModerator, selectUserLoggedIn} from "../../../../store/user/user.slice";
import StartGameSection from "./StartGameSection";

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
}));

const TechnologyDetails = () => {
    const classes = useStyles();
    const isUserLogged = useSelector(selectUserLoggedIn);
    const isModerator = useSelector(selectIsModerator)
    const [technology] = usePathTechnologyContext()

    if (isNil(technology)) {
        return <CircularProgress/>
    }


    const imageUrl = technology.image?.fileUrl || getStaticImageUrl(EMPTY_IMAGE_PATH)

    return (
        <Card className={classes.root}>
            {isUserLogged && isModerator && (
                <ActionButtonGroup/>
            )}
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
                <Chip label={`${technology.questionCount} Pytania`}/>
                <StartGameSection/>
            </CardContent>
        </Card>
    )
}
export default TechnologyDetails