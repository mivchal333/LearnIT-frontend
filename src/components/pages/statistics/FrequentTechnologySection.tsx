import React, {useMemo} from 'react'
import {Cell, Pie, PieChart, ResponsiveContainer} from 'recharts';
import {makeStyles} from "@material-ui/core/styles";
import {Paper, Typography} from "@material-ui/core";
import {selectUserAttempts, UserHistoryEntries} from "../../../store/history/history.slice";
import {useSelector} from "../../../store/store";
import {size, toNumber} from "lodash-es";
import {UserAttempt} from "../../../api/model/userAttempt.model";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
        marginTop: theme.spacing(3),
        height: "30vh",
    },
}));

interface ChartData {
    name: string,
    technologyId: number,
    count: number,
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RequestTechnologySection = () => {
    const classes = useStyles();
    const userHistoryEntries = useSelector(selectUserAttempts)


    const getData = (userHistoryEntries: UserHistoryEntries) => {
        let mapData: { [technologyId: number]: number } = {}


        Object.entries(userHistoryEntries).forEach(([key, value]) => {
            const technologyId = toNumber(key)

            const count = mapData[technologyId] || 0

            const answers = value.flatMap((userAttempt: UserAttempt) => userAttempt.history)

            const answersCount = size(answers);

            mapData[technologyId] = count + answersCount;
        })


        const data: ChartData[] = [];
        Object.entries(mapData).forEach(([key, value]) => {
            const technologyId = toNumber(key);
            data.push({
                name: 'TechnologyId',
                count: value,
                technologyId: technologyId,
            })

        })
        return data;
    }

    const data = useMemo(() => getData(userHistoryEntries), [userHistoryEntries]);

    return (
        <Paper className={classes.paper}>
            <Typography variant="subtitle2">Udzielone odpowiedzi</Typography>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="count"
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        fill="#8884d8"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                        ))}

                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </Paper>
    )
}
export default RequestTechnologySection