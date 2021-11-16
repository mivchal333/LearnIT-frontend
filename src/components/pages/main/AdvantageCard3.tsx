import React from 'react'
import {CardMedia, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {getStaticImageUrl, ONLINE_LEARNING_IMAGE_PATH} from "../../../service/staticProvider";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        padding: theme.spacing(3),
        marginTop: theme.spacing(3),
        height: "30vh",
    },
    cardMedia: {
        width: '100%',
        height: '20vw',
        maxHeight: "64rem",
        borderRadius: "25px",
    }
}));

const AdvantageCard3 = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <Grid container xs={12} alignItems="center" spacing={3}>
                <Grid item xs={6}>
                    <Grid container spacing={3}>
                        <Grid item>
                            <Typography variant="h5">
                                Nauka online
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography>
                                Korzystaj z aplikacji kiedy chcesz! Ucz się w dowolnej chwili, nie czekaj na trenera
                                lub rozpoczęcie kursu. Zacznij od razu po wybraniu technologii.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={getStaticImageUrl(ONLINE_LEARNING_IMAGE_PATH)}
                    />
                </Grid>
            </Grid>
        </div>
    )
}
export default AdvantageCard3