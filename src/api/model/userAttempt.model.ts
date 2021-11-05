import {HistoryEntry} from "./historyEntry.model";

enum GameType {
    QUIZ = "QUIZ",
    CARDS = " CARDS"
}

export interface UserAttempt {
    id: string,
    history: HistoryEntry[],
    startDate: number,
    endDate: number,
    gameType: GameType,
}