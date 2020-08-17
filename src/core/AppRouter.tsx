import React from 'react';
import Navbar from '../ui/Organisms/Navbar';
import { Switch, Route } from 'react-router-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import Todos from '../Features/Todos';
import Blog from '../Features/Blog';

const history = createBrowserHistory();

const Routes = [
    {
        text: 'Todos',
        to: '/',
        exact: true,
    },
    {
        text: 'Blog',
        to: '/blog',
        exact: true,
    }
]
const AppRouter = () => {
    return (
        <Router history={history}>
            <Navbar routes={Routes} />
            <div className="container">
                <Switch>
                    <Route component={Todos} path='/' exact></Route>
                    <Route component={Blog} path='/blog' exact></Route>
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;