import axios, {AxiosResponse} from "axios";
import {UserAttempt} from "../model/userAttempt.model";

const fetchUserHistoryByTechnology = (technologyId: number): Promise<AxiosResponse<UserAttempt[]>> => axios.get("/history", {
    params: {
        technologyId,
    }
})

const getUserAttempt = (attemptId: string): Promise<AxiosResponse<UserAttempt>> => axios.get(`/history/${attemptId}`)

export const UserHistoryRepository = {
    fetchUserHistoryByTechnology,
    getUserAttempt
}