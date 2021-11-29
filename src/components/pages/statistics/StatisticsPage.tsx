import React from "react";
import PageHeader from "./PageHeader";
import LatestAttemptSection from "./LatestAttemptSection";
import {useDispatch} from "../../../store/store";
import ActivitySection from "./ActivitySection";
import RequestTechnologySection from "./FrequentTechnologySection";
import DatePickerSection from "./DatePickerSection";

const StatisticsPage = () => {
    const dispatch = useDispatch();

    return (
        <>
            <PageHeader/>
            <DatePickerSection/>
            <LatestAttemptSection/>
            <ActivitySection/>
            <RequestTechnologySection/>
        </>
    )
}
export default StatisticsPage