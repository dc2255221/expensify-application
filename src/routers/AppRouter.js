import React from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import LoginPage from '../components/LoginPage';
import SignUpPage from '../components/SignUpPage';
import ForgotPasswordPage from '../components/ForgotPasswordPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { BaseStyledDiv } from '../styles/AppRouter';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <BaseStyledDiv>
            {/* <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
            <Switch> 
                <PublicRoute exact path="/" component={LoginPage}/>
                <PublicRoute path="/signup" component={SignUpPage}/>
                <PublicRoute path="/forgot" component={ForgotPasswordPage}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
                <PrivateRoute path="/create" component={AddExpensePage}/>
                <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </BaseStyledDiv>
    </Router>
);
  
export default AppRouter;