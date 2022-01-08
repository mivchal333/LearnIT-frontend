import axios, {AxiosResponse} from "axios";
import {UserAttempt} from "../model/userAttempt.model";

const fetchUserHistoryByTechnology = (technologyId: number): Promise<AxiosResponse<UserAttempt[]>> => axios.get("/api/history", {
    params: {
        technologyId,
    }
})

const getUserAttempt = (attemptId: string): Promise<AxiosResponse<UserAttempt>> => axios.get(`/api/history/${attemptId}`)

const fetchUserHistoryByTechnologyByDate = (technologyId: number, date: number): Promise<AxiosResponse<UserAttempt[]>> => axios.get("/api/history", {
    params: {
        technologyId,
        date,
    }
})


export const UserHistoryRepository = {
    fetchUserHistoryByTechnology,
    getUserAttempt,
    fetchUserHistoryByTechnologyByDate,
}