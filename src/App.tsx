import React, {ReactNode, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./components/pages/main/HomePage";
import {ROUTE_META, Routes} from "./route/routes";
import TechnologiesList from "./components/pages/technologies/list/technologiesList";
import QuizGamePage from "./components/pages/game/quiz/QuizGamePage";
import {map} from "lodash-es";
import CardsGamePage from "./components/pages/game/cards/CardsGamePage";
import TechnologyDetailsPage from "./components/pages/technologies/details/TechnologyDetailsPage";
import AddTechnologyPage from "./components/pages/technologies/technologyForm/AddTechnologyPage";
import AppBar from "./components/appbar/AppBar";
import LoginPage from "./components/pages/login/LoginPage";
import MyAccountPage from "./components/pages/account/MyAccountPage";
import StatisticsPage from "./components/pages/statistics/StatisticsPage";
import StickyFooter from "./components/footer/StickyFooter";
import CssBaseline from "@material-ui/core/CssBaseline";
import {makeStyles} from "@material-ui/core";
import FlagWrapper from "./components/FlagWrapper";
import ModalWrapper from "./components/ModalWrapper";
import AddQuestionPage from "./components/pages/technologies/addQuestion/AddQuestionPage";
import EditTechnologyPage from "./components/pages/technologies/technologyForm/EditTechnologyPage";
import SummaryPage from "./components/pages/attempt/SummaryPage";
import RegisterPage from "./components/pages/register/RegisterPage";
import {useDispatch} from "./store/store";
import {loadUserDetails} from "./store/user/actions";
import AdminAccountsPage from "./components/pages/admin/accounts/AdminAccountsPage";


type RouteContentType = {
    [key in Routes]: ReactNode
}

const RouteContent: RouteContentType = {
    QUIZ_STARTED: <QuizGamePage/>,
    TECHNOLOGIES: <TechnologiesList/>,
    TECHNOLOGY: <TechnologyDetailsPage/>,
    TECHNOLOGY_ADD: <AddTechnologyPage/>,
    TECHNOLOGY_EDIT: <EditTechnologyPage/>,
    TECHNOLOGY_QUESTION_ADD: <AddQuestionPage/>,

    CARDS_STARTED: <CardsGamePage/>,

    LOGIN: <LoginPage/>,
    REGISTER: <RegisterPage/>,
    ACCOUNT: <MyAccountPage/>,

    STATISTICS: <StatisticsPage/>,
    GAME_ATTEMPT_SUMMARY: <SummaryPage/>,

    ADMIN_ACCOUNTS: <AdminAccountsPage/>,

    // default one
    HOME: <HomePage/>,


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
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadUserDetails())
    }, [])
    return (
        <Router>
            <FlagWrapper/>
            <ModalWrapper/>
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
