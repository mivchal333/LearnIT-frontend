import {ReactText} from "react";

export enum Routes {
    HOME = 'HOME',
    TECHNOLOGIES = 'TECHNOLOGIES',
    TECHNOLOGY = 'TECHNOLOGY',
    TECHNOLOGY_ADD = 'TECHNOLOGY_ADD',
    TECHNOLOGY_EDIT = 'TECHNOLOGY_EDIT',
    TECHNOLOGY_QUESTION_ADD = 'TECHNOLOGY_QUESTION_ADD',
    TECHNOLOGY_QUESTION_LIST = 'TECHNOLOGY_QUESTION_LIST',
    TECHNOLOGY_QUESTION_EDIT = 'TECHNOLOGY_QUESTION_EDIT',

    QUIZ_STARTED = 'QUIZ_STARTED',
    CARDS_STARTED = 'CARDS_STARTED',
    GAME_ATTEMPT_SUMMARY = 'GAME_ATTEMPT_SUMMARY',

    STATISTICS = 'STATISTICS',

    LOGIN = 'LOGIN',
    REGISTER = 'REGISTER',
    ACCOUNT = 'ACCOUNT',

    ADMIN_ACCOUNTS = 'ADMIN_ACCOUNTS',
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
    TECHNOLOGY_QUESTION_LIST: `/technology/${IdNumberParamPath}/questions`,
    TECHNOLOGY_QUESTION_EDIT: `/technology/${IdNumberParamPath}/edit/:questionId`,

    QUIZ_STARTED: `/quiz`,

    CARDS_STARTED: `/cards`,

    STATISTICS: '/stats',
    GAME_ATTEMPT_SUMMARY: `/attempt/:id`,

    LOGIN: "/login",
    REGISTER: "/register",
    ACCOUNT: "/account",

    ADMIN_ACCOUNTS: "/admin/accounts"
}

type GetRoute = {
    [route in Routes]: Function
}
export const GET_ROUTE: GetRoute = {
    HOME: () => "/",
    TECHNOLOGIES: () => "/technology",
    TECHNOLOGY: (id: ReactText) => `/technology/${id}`,
    TECHNOLOGY_ADD: () => '/technology/add',
    TECHNOLOGY_EDIT: (id: ReactText) => `/technology/${id}/edit`,
    TECHNOLOGY_QUESTION_ADD: (id: ReactText) => `/technology/${id}/add`,
    TECHNOLOGY_QUESTION_LIST: (id: ReactText) => `/technology/${id}/questions`,
    TECHNOLOGY_QUESTION_EDIT: (technologyId: ReactText, questionId: ReactText) => `/technology/${technologyId}/edit/${questionId}`,

    QUIZ_STARTED: () => `/quiz`,
    CARDS_STARTED: () => `/cards`,

    STATISTICS: () => '/stats',
    GAME_ATTEMPT_SUMMARY: (id: string) => `/attempt/${id}`,

    LOGIN: () => "/login",
    REGISTER: () => "/register",
    ACCOUNT: () => '/account',

    ADMIN_ACCOUNTS: () => '/admin/accounts'
}