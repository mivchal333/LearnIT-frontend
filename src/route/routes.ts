import {ReactText} from "react";

export enum Routes {
    HOME = 'HOME',
    TECHNOLOGIES = 'TECHNOLOGIES',
    TECHNOLOGY = 'TECHNOLOGY',
    TECHNOLOGY_ADD = 'TECHNOLOGY_ADD',
    TECHNOLOGY_EDIT = 'TECHNOLOGY_EDIT',
    TECHNOLOGY_QUESTION_ADD = 'TECHNOLOGY_QUESTION_ADD',

    QUIZ_STARTED = 'QUIZ_STARTED',
    CARDS_STARTED = 'CARDS_STARTED',
    GAME_ATTEMPT_SUMMARY = 'GAME_ATTEMPT_SUMMARY',

    STATISTICS = 'STATISTICS',

    LOGIN = 'LOGIN',
    REGISTER = 'REGISTER',
    ACCOUNT = 'ACCOUNT',
}

type RoutesMeta = {
    [route in Routes]: string
}

const NumberRegex = "[^\\\\d+$]"
const IdNumberParamPath = `:id(${NumberRegex})`

export const ROUTE_META: RoutesMeta = {
    HOME: "",
    TECHNOLOGIES: "/technology",
    TECHNOLOGY: `/technology/${IdNumberParamPath}`,
    TECHNOLOGY_ADD: '/technology/add',
    TECHNOLOGY_EDIT: '/technology/:id/edit',
    TECHNOLOGY_QUESTION_ADD: `/technology/${IdNumberParamPath}/add`,

    QUIZ_STARTED: `/quiz/${IdNumberParamPath}/start`,

    CARDS_STARTED: `/cards/${IdNumberParamPath}/start`,

    STATISTICS: '/stats',
    GAME_ATTEMPT_SUMMARY: `/attempt/:id`,

    LOGIN: "/login",
    REGISTER: "/register",
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
    TECHNOLOGY_EDIT: (id: ReactText) => `/technology/${id}/edit`,
    TECHNOLOGY_QUESTION_ADD: (id: ReactText) => `/technology/${id}/add`,

    QUIZ_STARTED: (id: ReactText) => `/quiz/${id}/start`,
    CARDS_STARTED: (id: ReactText) => `/cards/${id}/start`,

    STATISTICS: () => '/stats',
    GAME_ATTEMPT_SUMMARY: (id: string) => `/attempt/${id}`,

    LOGIN: () => "/login",
    REGISTER: () => "/register",
    ACCOUNT: () => '/account'
}