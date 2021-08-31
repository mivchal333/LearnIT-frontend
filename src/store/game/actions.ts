import {Dispatch} from "../store";
import AttemptRepository from '../../api/repository/attempt.repository'
import {setUserAttemptId} from "./game.slice";

export const startAttempt = (technologyId: number) => async (dispatch: Dispatch) => {
    const {data} = await AttemptRepository.startAttempt(technologyId)

    dispatch(setUserAttemptId(data.id))
}