import React, {useEffect} from "react";
import PageHeader from "./PageHeader";
import LatestAttemptSection from "./LatestAttemptSection";
import {useDispatch} from "../../../store/store";
import {loadUserHistory} from "../../../store/history/actions";
import ActivitySection from "./ActivitySection";

const StatisticsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUserHistory())

    }, [])

    return (
        <>
            <PageHeader/>
            <LatestAttemptSection/>
            <ActivitySection/>
        </>
    )
}
export default StatisticsPage