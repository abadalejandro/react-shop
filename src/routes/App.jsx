import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../styles/global.css';
import Login from '../containers/Login';
import Layout from '../containers/Layout';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const App = () => {


    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/recovery-password' component={RecoveryPassword} />
                    <Route path='*' component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;