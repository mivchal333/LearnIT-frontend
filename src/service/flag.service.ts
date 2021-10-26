import {Flag, FlagType} from "../store/page/flag.model";

export const successFlag = (title: string): Flag => ({
    type: FlagType.SUCCESS,
    content: title,
})

export const failFlag = (title: string): Flag => ({
    type: FlagType.ERROR,
    content: title,
})