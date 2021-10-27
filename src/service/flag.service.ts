import {Flag, FlagType} from "../store/shared/page/flag.model";

export const successFlag = (title: string): Flag => ({
    type: FlagType.SUCCESS,
    content: title,
})

export const errorFlag = (title: string): Flag => ({
    type: FlagType.ERROR,
    content: title,
})