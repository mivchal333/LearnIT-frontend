import React, {useEffect} from "react";
import PageHeader from "./PageHeader";
import LatestAttemptSection from "./LatestAttemptSection";
import {useDispatch} from "../../../store/store";
import {loadUserHistory} from "../../../store/history/actions";
import ActivitySection from "./ActivitySection";
import RequestTechnologySection from "./FrequentTechnologySection";

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
            <RequestTechnologySection/>
        </>
    )
}
export default StatisticsPage