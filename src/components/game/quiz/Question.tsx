import React, {ChangeEvent, FormEvent, useState} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "../../../store/store";
import {submitAnswer} from "../../../store/quiz/actions";
import {Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@material-ui/core";
import {isEmpty, toNumber} from "lodash-es";
import {selectAnswerResult, selectQuestion} from "../../../store/quiz/quiz.slice";

const Question = () => {
    const question = useSelector(selectQuestion);
    const answerResult = useSelector(selectAnswerResult)
    const dispatch = useDispatch()


    const [answerId, setAnswerId] = useState(0)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(submitAnswer(answerId))
        console.log(event.currentTarget.elements)

    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setAnswerId(toNumber(value))
    }
    return <div>
        <form onSubmit={handleSubmit}>
            <FormControl component="fieldset">
                <FormLabel>{question.body}</FormLabel>
                <RadioGroup name="quiz" onChange={onChange} value={answerId}>
                    {question.answers.map(answer => (
                        <FormControlLabel value={answer.id} control={<Radio/>} label={answer.body}/>
                    ))}
                </RadioGroup>
                <Button type="submit" variant="outlined" color="primary" disabled={!isEmpty(answerResult)}>
                    Check Answer
                </Button>
            </FormControl>
        </form>
    </div>
}
export default Question