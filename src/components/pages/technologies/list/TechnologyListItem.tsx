import React from "react";
import {Card, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";
import {Technology} from "../../../../api/model/technology.model";
import {GET_ROUTE} from "../../../../route/routes";
import {useHistory} from "react-router-dom";
import {EMPTY_IMAGE_PATH, getStaticImageUrl} from "../../../../service/staticProvider";
import Checkbox from '@material-ui/core/Checkbox';
import {useDispatch, useSelector} from "../../../../store/store";
import {
    addSelectedTechnology,
    removeSelectedTechnology,
    selectIsSelectManyEnabled,
    selectSelectedTechnologiesIds
} from "../../../../store/technologies/technologies.slice";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "2em",
        marginTop: '1em',
        width: "15em"
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    cardMedia: {
        margin: theme.spacing(2),
        height: 140, // 16:9
        backgroundSize: "contain",
        backgroundColor: 'white',
    },
    cardActions: {
        marginTop: "auto",
        alignSelf: "flex-end",
    },
    actionCardSection: {
        cursor: "pointer",
    }
}));

interface PropsType {
    technology: Technology,
}

const TechnologyListItem = (props: PropsType) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const selectedIds = useSelector(selectSelectedTechnologiesIds)
    const isManyEnabled = useSelector(selectIsSelectManyEnabled)

    const isSelected = selectedIds.includes(props.technology.id)

    const onCheck = () => {
        if (isSelected) {
            dispatch(removeSelectedTechnology(props.technology.id))
        } else {
            dispatch(addSelectedTechnology(props.technology.id))
        }
    }
    const onClick = () => {
        history.push(GET_ROUTE.TECHNOLOGY(technology.id))
    }

    const imageUrl = props.technology.image?.fileUrl || getStaticImageUrl(EMPTY_IMAGE_PATH)

    const {technology} = props
    return (
        <Card className={classes.root}>
            {isManyEnabled && (
                <Checkbox
                    checked={isSelected}
                    onChange={onCheck}
                />
            )}
            <div onClick={onClick} className={classes.actionCardSection}>
                <CardMedia
                    className={classes.cardMedia}
                    image={imageUrl}
                />
                <CardContent>
                    <Typography variant="h5" component="h2" align="center">
                        {technology.name}
                    </Typography>
                </CardContent>
            </div>
        </Card>
    )
}
export default TechnologyListItem