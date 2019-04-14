import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Header from './layout/Header.jsx';
import Login from './auth/Login.jsx';
import Error from './auth/Error.jsx';


class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Route path={"/"} exact component={Header}/>
                <Route path={"/login"} component={Login}/>
                <Switch>
                    <Route path={"/errorpage/:errorMessage/:errorCode"} component={Error}/>
                </Switch>
            </React.Fragment>
        );
    }

}

export default App;