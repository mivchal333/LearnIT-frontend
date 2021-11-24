import React, {useEffect} from 'react'
import QuestionListHeader from "./QuestionListHeader";
import QuestionList from "./QuestionList";
import {useParams} from "react-router-dom";
import {TechnologyRouteParam} from "../../../../route/route.model";
import {useDispatch} from "../../../../store/store";
import {resetTechnologyContextId, setTechnologyContextId} from "../../../../store/technologies/technologies.slice";
import {toNumber} from "lodash-es";

interface PropsType {
}

const ListQuestionsPage = (props: PropsType) => {
    const dispatch = useDispatch();
    const {id} = useParams<TechnologyRouteParam>()

    useEffect(() => {
        dispatch(setTechnologyContextId(toNumber(id)));
    }, [id])

    useEffect(() => {
        return () => {
            dispatch(resetTechnologyContextId())
        }
    })
    return (
        <>
            <QuestionListHeader/>
            <QuestionList/>
        </>
    )
}
export default ListQuestionsPage