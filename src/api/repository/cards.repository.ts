import axios, {AxiosResponse} from "axios";
import {Card} from "../model/card.model";
import {GameProgress} from "../model/gameProgress.model";

const loadCard = async (attemptId: string): Promise<AxiosResponse<GameProgress<Card>>> => axios.get('/api/card', {
    params: {
        attemptId,
    }
})

const CardsRepository = {
    loadCard
}
export default CardsRepository