import axios, {AxiosResponse} from "axios";
import {UserAttempt} from "../model/userAttempt.model";

const fetchUserHistoryByTechnology = (technologyId: number): Promise<AxiosResponse<UserAttempt[]>> => axios.get("/history", {
    params: {
        technologyId,
    }
})



export const UserHistoryRepository = {
    fetchUserHistoryByTechnology,
}