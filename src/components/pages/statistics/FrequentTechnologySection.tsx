import React, {useEffect, useState} from 'react'
import {Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip} from 'recharts';
import {makeStyles} from "@material-ui/core/styles";
import {colors, Paper, Typography} from "@material-ui/core";
import {selectUserAttempts, UserHistoryEntries} from "../../../store/history/history.slice";
import {useDispatch, useSelector} from "../../../store/store";
import {size, toNumber} from "lodash-es";
import {UserAttempt} from "../../../api/model/userAttempt.model";
import {getTechnology} from "../../../store/technologies/actions";

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

const COLORS = [
    colors.blue["400"],
    colors.green["400"],
    colors.orange["400"],
    colors.red["400"],
    colors.purple["400"],
    colors.pink["400"],
];

const RequestTechnologySection = () => {
    const classes = useStyles();
    const userHistoryEntries = useSelector(selectUserAttempts)
    const dispatch = useDispatch();
    const [data, setData] = useState<ChartData[]>([])

    useEffect(() => {
        loadData(userHistoryEntries)
    }, [userHistoryEntries])

    const loadData = async (userHistoryEntries: UserHistoryEntries) => {
        let mapData: { [technologyId: number]: number } = {}


        Object.entries(userHistoryEntries).forEach(([key, value]) => {
            const technologyId = toNumber(key)

            const count = mapData[technologyId] || 0

            const answers = value.flatMap((userAttempt: UserAttempt) => userAttempt.history)

            const answersCount = size(answers);

            mapData[technologyId] = count + answersCount;
        })


        const data: ChartData[] = [];
        for (const [key, value] of Object.entries(mapData)) {
            if (value > 0) {
                const technologyId = toNumber(key);
                const technology = await dispatch(getTechnology(technologyId));
                data.push({
                    name: technology.name,
                    count: value,
                    technologyId: technologyId,
                });
            }
        }
        setData(data)
    }

    return (
        <Paper className={classes.paper}>
            <Typography variant="subtitle2">Udział technologii</Typography>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="count"
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        isAnimationActive={false}
                        label={(lab: any) => lab.name}

                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                        ))}
                    </Pie>
                    <Legend/>
                    <Tooltip/>

                </PieChart>
            </ResponsiveContainer>
        </Paper>
    )
}
export default RequestTechnologySection