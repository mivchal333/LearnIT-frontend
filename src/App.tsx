import React, {ReactNode} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./components/main/HomePage";
import {ROUTE_META, Routes} from "./route/routes";
import TechnologiesList from "./components/technologies/technologiesList";
import ConfirmStartQuiz from "./components/game/quiz/ConfirmStartQuiz";
import QuizGame from "./components/game/quiz/QuizGame";
import {map} from "lodash-es";
import ConfirmStartCards from "./components/game/cards/ConfirmStartCards";
import CardsGameWrapper from "./components/game/cards/CardsGameWrapper";
import TechnologyDetailsPage from "./components/technologies/details/TechnologyDetailsPage";
import AddTechnologyPage from "./components/technologies/add/AddTechnologyPage";
import AppBar from "./components/appbar/AppBar";
import LoginPage from "./components/account/LoginPage";
import MyAccountPage from "./components/account/MyAccountPage";
import StatisticsPage from "./components/statistics/StatisticsPage";


type RouteContentType = {
    [key in Routes]: ReactNode
}

const RouteContent: RouteContentType = {
    CARDS_START_CONFIRM: <ConfirmStartCards/>,
    QUIZ_STARTED: <QuizGame/>,
    QUIZ_START_CONFIRM: <ConfirmStartQuiz/>,
    TECHNOLOGY_ADD: <AddTechnologyPage/>,
    TECHNOLOGIES: <TechnologiesList/>,
    TECHNOLOGY: <TechnologyDetailsPage/>,
    CARDS_STARTED: <CardsGameWrapper/>,

    LOG_IN: <LoginPage/>,
    ACCOUNT: <MyAccountPage/>,
    STATISTICS: <StatisticsPage/>,

    // default one
    HOME: <HomePage/>
}

const App = () => {
    return (
        <Router>
            <AppBar>
                <Switch>
                    {map(RouteContent, (routeComponent, route: Routes) => {
                        return (
                            <Route key={route} path={ROUTE_META[route]} exact>
                                {routeComponent}
                            </Route>
                        )
                    })}
                </Switch>
            </AppBar>
        </Router>
    );
}

export default App;
