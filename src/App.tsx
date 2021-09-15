import React, {ReactNode} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import HomePage from "./components/main/HomePage";
import {ROUTE_META, Routes} from "./route/routes";
import TechnologiesList from "./components/technologies/technologiesList";
import ConfirmStartQuiz from "./components/game/quiz/ConfirmStartQuiz";
import QuizGame from "./components/game/quiz/QuizGame";
import {map} from "lodash-es";
import ConfirmStartCards from "./components/game/cards/ConfirmStartCards";
import CardsGameWrapper from "./components/game/cards/CardsGameWrapper";
import UserHistory from "./components/history/UserHistory";
import TechnologyDetailsPage from "./components/technologies/TechnologyDetailsPage";


type RouteContentType = {
    [key in Routes]: ReactNode
}

const RouteContent: RouteContentType = {
    CARDS_STARTED: <CardsGameWrapper/>,
    CARDS_START_CONFIRM: <ConfirmStartCards/>,
    QUIZ_STARTED: <QuizGame/>,
    QUIZ_START_CONFIRM: <ConfirmStartQuiz/>,
    TECHNOLOGIES: <TechnologiesList/>,
    TECHNOLOGY: <TechnologyDetailsPage/>,
    HOME: <HomePage/>,
    USER_HISTORY: <UserHistory/>,
}

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to={ROUTE_META.TECHNOLOGIES}>Technologies</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    {map(RouteContent, (routeComponent, route: Routes) => {
                        return (
                            <Route key={route} path={ROUTE_META[route]} exact>
                                {routeComponent}
                            </Route>
                        )
                    })}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
