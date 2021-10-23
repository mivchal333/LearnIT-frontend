import React, {useState} from "react";
import {Card, CardMedia, createStyles, makeStyles} from "@material-ui/core";
import {Theme} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        imageCard: {
            marginRight: theme.spacing(6),
        },
        cardMedia: {
            width: '200px',
            height: '200px',
        },
        input: {
            display: 'none',
        },
        uploadDimmer: {
            backgroundColor: 'rgb(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
        }
    }),
);


interface PropsType {
    value: string,
    onChange: (value: string) => void,
}

const ImageField = (props: PropsType) => {
    const classes = useStyles();
    const [showButton, setShowButton] = useState(false)
    return (
        <Card
            className={classes.imageCard}
            onMouseEnter={() => setShowButton(true)}
            onMouseLeave={() => setShowButton(false)}
        >
            <CardMedia
                className={classes.cardMedia}
                // image={props.value}
                image="https://source.unsplash.com/random"
            >
                {showButton && (
                    <div className={classes.uploadDimmer}>
                        <input accept="image/*" className={classes.input} id="icon-button-file" type="file"/>
                        <label htmlFor="icon-button-file">
                            <IconButton color="secondary" aria-label="upload picture" component="span" size="medium">
                                <PhotoCamera/>
                            </IconButton>
                        </label>
                    </div>
                )}
            </CardMedia>
        </Card>
    )
}
export default React.memo(ImageField)