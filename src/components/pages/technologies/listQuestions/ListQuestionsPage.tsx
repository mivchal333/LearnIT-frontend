import React from 'react'
import QuestionListHeader from "./QuestionListHeader";
import QuestionList from "./QuestionList";

interface PropsType {
}

const ListQuestionsPage = (props: PropsType) => {

    return (
        <>
            <QuestionListHeader/>
            <QuestionList/>
        </>
    )
}
export default ListQuestionsPage