import React, {useMemo} from 'react'
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {makeStyles} from "@material-ui/core/styles";
import {Paper, Typography} from "@material-ui/core";
import {selectUserAttempts, UserHistoryEntries} from "../../../store/history/history.slice";
import {useSelector} from "../../../store/store";
import {sortBy, takeRight, toNumber, values} from "lodash-es";
import {format, set} from "date-fns";

const LAST_ELEMENTS_COUNT = 10;

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
        marginTop: theme.spacing(3),
        height: "30vh",
    },
}));

interface ChartData {
    name: string,
    count: number,
    dateValue: number,
}

const ZERO_TIME = {hours: 0, minutes: 0, seconds: 0, milliseconds: 0};

const LatestAttemptSection = () => {
    const classes = useStyles();
    const userAttempts = useSelector(selectUserAttempts)

    const getData = (userHistoryEntries: UserHistoryEntries) => {
        let mapData: { [date: number]: number } = {}

        values(userHistoryEntries).flatMap(userAttempts => userAttempts)
            .map(userAttempt => {
                const attemptDayDate = set(userAttempt.startDate, ZERO_TIME)
                const attemptDateValueOf = attemptDayDate.valueOf()

                const count = mapData[attemptDateValueOf] || 0

                mapData[attemptDateValueOf] = count + 1
            })

        const data: ChartData[] = [];
        Object.entries(mapData).forEach(([key, value]) => {
            const dateValue = toNumber(key);
            data.push({
                name: format(dateValue, 'dd/MM/yyyy'),
                count: value,
                dateValue: dateValue,
            })

        })
        const sorted = sortBy(data, [chartEntry => chartEntry.dateValue]);
        return takeRight(sorted, LAST_ELEMENTS_COUNT)
    }

    const data = useMemo(() => getData(userAttempts), [userAttempts]);

    return (
        <Paper className={classes.paper}>
            <Typography variant="subtitle2">Ostatnie podejścia</Typography>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis type="number" domain={[0, 'dataMax + 2']}/>
                    <Tooltip/>
                    <Bar dataKey="count" fill="#8884d8" name="Podejścia"/>
                </BarChart>
            </ResponsiveContainer>
        </Paper>
    )
}
export default LatestAttemptSection