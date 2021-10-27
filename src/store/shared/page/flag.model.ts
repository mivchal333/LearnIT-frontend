export interface Flag {
    type: FlagType,
    content: string,
}

export enum FlagType {
    SUCCESS = "success",
    INFO = "info",
    WARNING = "warning",
    ERROR = "error",
}