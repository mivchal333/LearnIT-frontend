import {ReactText} from "react";

export enum Routes {
    HOME = 'HOME',
    TECHNOLOGIES = 'TECHNOLOGIES',
    TECHNOLOGY = 'TECHNOLOGY',
    TECHNOLOGY_ADD = 'TECHNOLOGY_ADD',
    TECHNOLOGY_QUESTION_ADD = 'TECHNOLOGY_QUESTION_ADD',

    QUIZ_STARTED = 'QUIZ_STARTED',
    CARDS_STARTED = 'CARDS_STARTED',

    STATISTICS = 'STATISTICS',

    LOG_IN = 'LOG_IN',
    ACCOUNT = 'ACCOUNT',
}

type RoutesMeta = {
    [route in Routes]: string
}

const NumberRegex = "[^\\\\d+$]"
const IdParamPath = `:id(${NumberRegex})`

export const ROUTE_META: RoutesMeta = {
    HOME: "",
    TECHNOLOGIES: "/technology",
    TECHNOLOGY: `/technology/${IdParamPath}`,
    TECHNOLOGY_ADD: '/technology/add',
    TECHNOLOGY_QUESTION_ADD: `/technology/${IdParamPath}/add`,

    QUIZ_STARTED: `/quiz/${IdParamPath}/start`,

    CARDS_STARTED: `/cards/${IdParamPath}/start`,

    STATISTICS: '/stats',

    LOG_IN: "/login",
    ACCOUNT: "/account"
}

type GetRoute = {
    [route in Routes]: (arg?: any) => string
}
export const GET_ROUTE: GetRoute = {
    HOME: () => "/",
    TECHNOLOGIES: () => "/technology",
    TECHNOLOGY: (id: ReactText) => `/technology/${id}`,
    TECHNOLOGY_ADD: () => '/technology/add',
    TECHNOLOGY_QUESTION_ADD: (id: ReactText) => `/technology/${id}/add`,

    QUIZ_STARTED: (id: ReactText) => `/quiz/${id}/start`,
    CARDS_STARTED: (id: ReactText) => `/cards/${id}/start`,

    STATISTICS: () => '/stats',

    LOG_IN: () => "/login",
    ACCOUNT: () => '/account'
}