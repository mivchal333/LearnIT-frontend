import {HistoryEntry} from "./historyEntry.model";

enum GameType {
    QUIZ = "QUIZ",
    CARDS = " CARDS"
}

export interface UserAttempt {
    id: string,
    history: HistoryEntry,
    startDate: string,
    endDate: string,
    gameType: GameType,
}