export interface Flag {
    type: FlagType,
    title: string,
    content?: string,
}

export enum FlagType {
    SUCCESS = "success",
    INFO = "info",
    WARNING = "warning",
    ERROR = "error",
}