import axios, {AxiosResponse} from "axios";
import qs from 'querystring'
import {UserAttempt} from "../model/userAttempt.model";

const startAttempt = async (technologyIds: number[]): Promise<AxiosResponse<UserAttempt>> => axios.post('/attempt', null, {
    params: {
        technologyId: technologyIds
    },
    paramsSerializer: params => {
        return qs.stringify(params)
    }
})

const AttemptRepository = {
    startAttempt
}
export default AttemptRepository