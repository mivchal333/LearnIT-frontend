import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import HomePage from "./components/main/HomePage";
import {ROUTE} from "./route/routes";
import TechnologiesList from "./components/technologies/technologiesList";
import TechnologyDetails from "./components/technologies/technologyDetails";

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
                            <Link to={ROUTE.TECHNOLOGIES}>Technologies</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path={ROUTE.TECHNOLOGY + ":id"}>
                        <TechnologyDetails/>
                    </Route>
                    <Route path={ROUTE.TECHNOLOGIES} exact>
                        <TechnologiesList/>
                    </Route>
                    <Route path="/">
                        <HomePage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
