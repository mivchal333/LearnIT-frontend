import React from 'react'
import {CardMedia, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {getStaticImageUrl, QUESTION_HEAD_IMAGE_PATH} from "../../../service/staticProvider";

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

const AdvantageCard2 = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <Grid container xs={12} alignItems="center" spacing={3}>
                <Grid item xs={6}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={getStaticImageUrl(QUESTION_HEAD_IMAGE_PATH)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={3}>
                        <Grid item>
                            <Typography variant="h5">
                                Różne sposoby nauki
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography>
                                Wybierz swój ulubiony sposób nauki! Dopasuj aplikację pod swój styl i zwiększ
                                efektywnosć.
                                Odpowiadaj na pytania w formie quizu lub ćwicz zapamiętywanie za pomocą fiszek.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
export default AdvantageCard2