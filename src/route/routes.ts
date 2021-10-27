export enum Routes {
    HOME = 'HOME',
    TECHNOLOGIES = 'TECHNOLOGIES',
    TECHNOLOGY = 'TECHNOLOGY',
    TECHNOLOGY_ADD = 'TECHNOLOGY_ADD',

    QUIZ_STARTED = 'QUIZ_STARTED',
    CARDS_STARTED = 'CARDS_STARTED',

    STATISTICS = 'STATISTICS',

    LOG_IN = 'LOG_IN',
    ACCOUNT = 'ACCOUNT',
}

type RoutesMeta = {
    [route in Routes]: string
}

export const ROUTE_META: RoutesMeta = {
    HOME: "",
    TECHNOLOGIES: "/technology",
    TECHNOLOGY: '/technology/:id',
    TECHNOLOGY_ADD: '/technology/add',

    QUIZ_STARTED: '/quiz/:id/start',

    CARDS_STARTED: '/cards/:id/start',

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
    TECHNOLOGY: (id: number | string) => `/technology/${id}`,
    TECHNOLOGY_ADD: () => '/technology/add',

    QUIZ_STARTED: (id: number | string) => `/quiz/${id}/start`,
    CARDS_STARTED: (id: number | string) => `/cards/${id}/start`,

    STATISTICS: () => '/stats',

    LOG_IN: () => "/login",
    ACCOUNT: () => '/account'
}