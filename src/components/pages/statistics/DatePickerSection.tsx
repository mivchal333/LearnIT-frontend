import React, {useEffect} from 'react'
import {Grid, Paper, Typography} from "@material-ui/core";
import {useDispatch} from "../../../store/store";
import {loadUserHistory} from "../../../store/history/actions";
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
import {makeStyles} from "@material-ui/core/styles";
import {sub} from "date-fns";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
        marginTop: theme.spacing(3),
    },
}));

const DatePickerSection = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [selectedDate, setSelectedDate] = React.useState<Date | null>()

    useEffect(() => {
        const initialDate = sub(new Date(), {
            months: 1,
        });
        handleDateChange(initialDate)
    }, [])

    const handleDateChange = (date: Date | null) => {
        if (date) {
            setSelectedDate(date)
            dispatch(loadUserHistory(date.valueOf()))
        }
    }

    return (
        <Paper className={classes.paper}>
            <Grid container spacing={6} alignItems="center">
                <Grid item>
                    <Typography variant="h5">
                        Pokazuj od dnia
                    </Typography>
                </Grid>
                <Grid item>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
            </Grid>
        </Paper>
    )

}
export default DatePickerSection