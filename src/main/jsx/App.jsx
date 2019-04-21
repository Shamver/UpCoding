import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Header from './layout/Header.jsx';
import Login from './auth/Login.jsx';
import Error from './auth/Error.jsx';

class App extends React.Component {
    state = {
        dropDownToggle : {
            Message : false,
            Notification : false,
            Profile : false
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("업뎃됨");
    }

    onToggleDropDown = (comp) => {
        const dropDownToggle = this.state.dropDownToggle;

        let keys = Object.keys(dropDownToggle);
        let key = "";
        let item = "";
        for (let i = 0; i< keys.length; i++) {
            key = keys[i];
            item = dropDownToggle[key];
            if(key === comp)
                dropDownToggle[key] = !dropDownToggle[key];
            else
                dropDownToggle[key] = false;
        }

        this.setState({
            dropDownToggle : dropDownToggle
        })
    };

    render() {
        return (
            <div>
                <Route
                    exact path="/"
                    render={({location, history}) => (
                        <Header onToggleDropDown={this.onToggleDropDown}
                                messageToggle={this.state.dropDownToggle.Message}
                                notiToggle={this.state.dropDownToggle.Notification}
                                profileToggle={this.state.dropDownToggle.Profile}/>
                    )}
                />
                <Route path={"/login"} component={Login}/>
                <Switch>
                    <Route path={"/errorpage/:errorMessage/:errorCode"} component={Error}/>
                </Switch>
            </div>
        );
    }
}

export default App;