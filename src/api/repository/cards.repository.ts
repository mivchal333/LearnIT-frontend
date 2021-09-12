import axios, {AxiosResponse} from "axios";
import {Card} from "../model/card.model";

const loadCard = async (attemptId: string): Promise<AxiosResponse<Card>> => axios.get('/fishcard', {
    params: {
        attemptId,
    }
})

export default {
    loadCard
}