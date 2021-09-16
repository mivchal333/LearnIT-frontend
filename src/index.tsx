import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./store/store";
import {Provider} from "react-redux";
import {createTheme, ThemeProvider} from '@material-ui/core/styles';

const theme = createTheme({});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
