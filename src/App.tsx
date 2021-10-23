import React, {ReactNode} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./components/pages/main/HomePage";
import {ROUTE_META, Routes} from "./route/routes";
import TechnologiesList from "./components/pages/technologies/technologiesList";
import ConfirmStartQuiz from "./components/pages/game/quiz/ConfirmStartQuiz";
import QuizGame from "./components/pages/game/quiz/QuizGame";
import {map} from "lodash-es";
import ConfirmStartCards from "./components/pages/game/cards/ConfirmStartCards";
import CardsGameWrapper from "./components/pages/game/cards/CardsGameWrapper";
import TechnologyDetailsPage from "./components/pages/technologies/details/TechnologyDetailsPage";
import AddTechnologyPage from "./components/pages/technologies/add/AddTechnologyPage";
import AppBar from "./components/appbar/AppBar";
import LoginPage from "./components/pages/account/LoginPage";
import MyAccountPage from "./components/pages/account/MyAccountPage";
import StatisticsPage from "./components/pages/statistics/StatisticsPage";
import StickyFooter from "./components/footer/StickyFooter";
import CssBaseline from "@material-ui/core/CssBaseline";
import {makeStyles} from "@material-ui/core";


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

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        overflow: 'hidden',
    },
}));

const App = () => {
    const classes = useStyles();
    return (
        <Router>
            <div className={classes.root}>
                <CssBaseline/>
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
                <StickyFooter/>
            </div>
        </Router>
    );
}

export default App;
