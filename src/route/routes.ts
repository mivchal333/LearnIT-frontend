export const ROUTE = {
    HOME: "/",
    TECHNOLOGIES: "/technology",
    TECHNOLOGY: '/technology/:id',
    QUIZ_START_CONFIRM: '/quiz/:id/confirm',
    QUIZ_STARTED: '/quiz/:id/start'
}

export const GET_ROUTE = {
    HOME: () => "/",
    TECHNOLOGIES: () => "/technology",
    TECHNOLOGY: (id: number | string) => `/technology/${id}`,
    QUIZ_START_CONFIRM: (id: number | string) => `/quiz/${id}/confirm`,
    QUIZ_STARTED: (id: number | string) => `/quiz/${id}/start`,
    CARDS_START_CONFIRM: (id: number | string) => `/cards/${id}/confirm`,
    CARDS_STARTED: (id: number | string) => `/cards/${id}/start`,
}