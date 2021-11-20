import React from 'react'
import {CardMedia, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {getStaticImageUrl, LEARNING_PROGRESS_IMAGE_PATH} from "../../../service/staticProvider";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        padding: theme.spacing(3),
        marginTop: theme.spacing(3),
        height: "30vh",
    },
    cardMedia: {
        width: '100%',
        height: '20vw',
        maxHeight: "21rem",
        borderRadius: "25px",
    }
}));

const AdvantageCard1 = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <Grid container xs={12} alignItems="center" spacing={3}>
                <Grid item xs={6}>
                    <Grid container spacing={3}>
                        <Grid item>
                            <Typography variant="h5">
                                Darmowa aplikacja do nauki
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography>
                                Możesz korzystać z wszystkich możliwości aplikacji całkowicie za darmo.
                                Nie wymagamy opłat, subskrybcji lub abonamentów.
                                Wierzymy, że dostęp do wiedzy powinien być darmowy.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={getStaticImageUrl(LEARNING_PROGRESS_IMAGE_PATH)}
                    />
                </Grid>
            </Grid>
        </div>
    )
}
export default AdvantageCard1