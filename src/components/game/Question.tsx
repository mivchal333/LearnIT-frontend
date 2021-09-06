import React, {ChangeEvent, FormEvent, useState} from "react";
import {useSelector} from "react-redux";
import {selectQuestion} from "../../store/game/game.slice";
import {useDispatch} from "../../store/store";
import {submitAnswer} from "../../store/game/actions";
import {Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@material-ui/core";
import {toNumber} from "lodash-es";

const Question = () => {
    let question = useSelector(selectQuestion);
    const dispatch = useDispatch()

    const [answerId, setAnswerId] = useState(0)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(submitAnswer(answerId))
        console.log(event.currentTarget.elements)

    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        console.log('checked answer', e.target.value)
        setAnswerId(toNumber(value))
    }
    return <div>
        <form onSubmit={handleSubmit}>
            <FormControl component="fieldset">
                <FormLabel component="legend">{question.body}</FormLabel>
                <RadioGroup aria-label="quiz" name="quiz" onChange={onChange}>
                    {question.answers.map(answer => (
                        <FormControlLabel value={answer.id} control={<Radio/>} label={answer.body}/>
                    ))}
                </RadioGroup>
                <Button type="submit" variant="outlined" color="primary">
                    Check Answer
                </Button>
            </FormControl>
        </form>
    </div>
}
export default Question