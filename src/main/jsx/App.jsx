import React from 'react';

import { Route, Switch } from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';

import Home from './home/Home.jsx';
import Login from './auth/Login.jsx';
import Error from './auth/Error.jsx';
import Navbar from './navbar/Navbar.jsx';

import styled from 'styled-components';

const Header = styled.div`
    position: fixed;
    height: 65px;
    width: 100%;
    background-color: black;
`

const NavbarStyled = styled.div`
    position: fixed !important;
    left: 0 !important;
    top : 65px !important;
    width: 250px;
    height: 100%;
    background-color: #1a2942;
`

class App extends React.Component {

    state = {
        selectedCollapse: '',
        selectedSidebar: ''
    }

    onSelectCollapse = (data) => {
        if(this.state.selectedCollapse == data.target.name){
            this.setState({
                selectedCollapse: ''
            });
        } else {
            this.setState({
                selectedCollapse: data.target.name
            });
        }
    }

    onSelectSidebar = (data) => {
        if(this.state.selectedSidebar == data.target.name){
            this.setState({
                selectedSidebar: ''
            });
        } else {
            this.setState({
                selectedSidebar: data.target.name
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <Route component={Header}/>

                <NavbarStyled>
                    <Navbar
                        menus={[
                            {
                                "head": "데이터",
                                "icon": fa.faDatabase,
                                "items": [
                                    {
                                        "name": "데이터-1",
                                        "to": "/data/1"
                                    },
                                    {
                                        "name": "데이터-2",
                                        "to": "/data/2"
                                    }
                                ]
                            },
                            {
                                "head": "장비",
                                "icon": fa.faToolbox,
                                "items": [
                                    {
                                        "name": "장비-1",
                                        "to": "/device/1"
                                    },
                                    {
                                        "name": "장비-2",
                                        "to": "/device/2"
                                    },
                                    {
                                        "name": "장비-3",
                                        "to": "/device/3"
                                    }
                                ]
                            },
                            {
                                "head": "일정",
                                "icon": fa.faCalendarAlt,
                                "items": [
                                    {
                                        "name": "일정-1",
                                        "to": "/plan/1"
                                    },
                                    {
                                        "name": "일정-2",
                                        "to": "/plan/2"
                                    },
                                    {
                                        "name": "일정-3",
                                        "to": "/plan/3"
                                    },
                                    {
                                        "name": "일정-4",
                                        "to": "/plan/4"
                                    }
                                ]
                            },
                            {
                                "head": "이메일",
                                "icon": fa.faEnvelope,
                                "items": [
                                    {
                                        "name": "이메일-1",
                                        "to": "/email/1"
                                    },
                                    {
                                        "name": "이메일-2",
                                        "to": "/email/2"
                                    },
                                    {
                                        "name": "이메일-3",
                                        "to": "/email/3"
                                    }
                                ]
                            }
                        ]}
                        selectedCollapse={this.state.selectedCollapse}
                        selectedSidebar={this.state.selectedSidebar}
                        onSelectCollapse={this.onSelectCollapse}
                        onSelectSidebar={this.onSelectSidebar}
                    />
                </NavbarStyled>


                {/*<Route path={"/"} exact component={Home}/>*/}
                {/*<Route path={"/login"} component={Login}/>*/}
                {/*<Switch>*/}
                    {/*<Route path={"/errorpage/:errorMessage/:errorCode"} component={Error}/>*/}
                {/*</Switch>*/}
            </React.Fragment>
        );
    }

}

export default App;