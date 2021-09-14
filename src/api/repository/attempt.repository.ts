import axios, {AxiosResponse} from "axios";
import {UserAttempt} from "../model/userAttempt.model";

const startAttempt = async (technologyId: number): Promise<AxiosResponse<UserAttempt>> => axios.post('/attempt', null, {
    params: {
        technologyId
    }
})

const AttemptRepository = {
    startAttempt
}
export default AttemptRepository