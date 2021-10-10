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
                    <Route exact path='/send-email' component={SendEmail} />
                    <Route exact path='/new-password' component={NewPassword} />
                    <Route exact path='/account' component={MyAccout} />
                    <Route exact path='/signup' component={CreateAccount} />
                    <Route exact path='/checkout' component={Checkout} />
                    <Route exact path='/orders' component={Orders} />
                    
                    <Route path='*' component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;
