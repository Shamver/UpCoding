import React from 'react';

import { Route, Switch } from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';

import Header from './layout/Header.jsx';
import Home from './home/Home.jsx';
import Login from './auth/Login.jsx';
import Error from './auth/Error.jsx';
import Navbar from './navbar/Navbar.jsx';

import styled from 'styled-components';
import * as rs from 'reactstrap';

import RightIconSpan from '../resources/style/RightIconSpan.js';
import TextSpan from '../resources/style/TextSpan.js';
import ListGroup from '../resources/style/ListGroup.js';

const NavbarStyled = styled.div`
    position: fixed !important;
    left: 0 !important;
    top : 65px !important;
    transition: width 0.3s;
    
    @media only screen and (max-width: 1199px) {
        width: ${props => props.toggled == "true" ? "250px" : "0px"};
        overflow: ${props => props.toggled == "true" ? "auto" : "hidden"};
    }
    
    @media only screen and (min-width: 1200px) {
        width: ${props => props.toggled == "true" ? "64px" : "250px"};
        &:hover {
            width: 250px;
        }
        &:hover ${RightIconSpan} {
            visibility: visible;
            opacity: 100;
            transition: all 0.1s;
            transition-delay: 0.1s;
        }
        &:hover ${TextSpan} {
            visibility: visible;
            opacity: 100;
            transition: all 0.1s;
            transition-delay: 0.1s;
        }
        &:hover ${ListGroup} {
            visibility: visible;
            opacity: 100;
            max-height: none;
            transition: visibility opacity max-height 0.2s;
            transition-delay: 0.1s;
        }
    }
    
    height: 100%;
    background-color: #1a2942;
`

const MainComponent = styled(rs.Container)`

    @media only screen and (max-width: 1200px) {
        padding-left: 15px !important;
    }
    
    @media only screen and (min-width: 1200px) {
        padding-left: ${props => props.toggled == "true" ? "70px" : "250px"} !important;
    }
    padding-top: 80px;
    padding-bottom: 10px;
    transition: all 0.3s;
`

class App extends React.Component {

    state = {
        selectedCollapse: '',
        selectedSidebar: '',
        isToggleSidebar: false
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

    onToggleSidebar = () => {

        this.setState({
            isToggleSidebar: !this.state.isToggleSidebar
        })
    }

    render() {
        let toggled = false;
        if(this.state.isToggleSidebar){
            toggled = true;
        }

        return (
            <React.Fragment>
                <Route
                    render={props => (<Header props={props} onToggleSidebar={this.onToggleSidebar}
                                              isToggleSidebar={this.state.isToggleSidebar}/>)}
                />

                <NavbarStyled
                    toggled={toggled.toString()}
                >
                    <Navbar
                        menus={[
                            {
                              "head": "게시판",
                              "icon": fa.faClipboardList,
                                "items": [
                                    {
                                        "name": "전체",
                                        "to": "/board/all"
                                    },
                                    {
                                        "name": "자유",
                                        "to": "/board/free"
                                    },
                                    {
                                        "name": "코딩",
                                        "to": "/board/coding"
                                    },
                                    {
                                        "name": "Q&A",
                                        "to": "/board/qna"
                                    },
                                ]
                            },
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
                        onToggleSidebar={this.onToggleSidebar}
                        isToggleSidebar={this.state.isToggleSidebar}
                    />
                </NavbarStyled>
                <MainComponent
                    toggled={toggled.toString()}
                >
                    <Home
                        onToggleSidebar={this.onToggleSidebar}
                    />
                </MainComponent>

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