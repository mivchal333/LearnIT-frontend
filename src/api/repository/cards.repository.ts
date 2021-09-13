import axios, {AxiosResponse} from "axios";
import {Card} from "../model/card.model";
import {GameProgress} from "../model/gameProgress.model";

const loadCard = async (attemptId: string): Promise<AxiosResponse<GameProgress<Card>>> => axios.get('/fishcard', {
    params: {
        attemptId,
    }
})

export default {
    loadCard
}