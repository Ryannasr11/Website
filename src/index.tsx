import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// redux
import history from './components/Shared/history';
import { defaultStore } from './components/Shared/Redux/defaultStore';
import { Provider } from 'react-redux';

// styling
import './index.css';
import theme from './styles/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

// views
import HomeView from './views/HomeView';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={defaultStore}>
            <Router history={history}>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <Switch>
                        <Route exact path="/" component={HomeView} />
                    </Switch>
                </MuiThemeProvider>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
