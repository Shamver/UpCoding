import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './layout/Header.jsx';
import Home from './content/home/Home.jsx';
import Navbar from './navbar/Navbar.jsx';
import LoginModal from './modal/LoginModal.jsx';
import Board from "./content/board/Board.jsx";

import styled from 'styled-components';
import * as rs from 'reactstrap';
import RightIconSpan from '../resources/style/navbar/RightIconSpan.js';
import TextSpan from '../resources/style/navbar/TextSpan.js';
import ListGroup from '../resources/style/navbar/ListGroup.js';
import * as fa from '@fortawesome/free-solid-svg-icons';


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
`;

const MainComponent = styled.div`
    @media only screen and (max-width: 1200px) {
        padding-left: 15px !important;
    }
    
    @media only screen and (min-width: 1200px) {
        padding-left: ${props => props.toggled == "true" ? "70px" : "250px"} !important;
    }
    transition: all 0.3s;
`;

const MainWrapper = styled.div`
    padding: 90px 15px 25px 15px;
    font-family : 'Jeju Gothic', 'Roboto';
`

class App extends React.Component {
    state = {
        selectedCollapse: 'home',
        selectedSidebar: '',
        isToggleSidebar: false,
        isOpenLoginModal: false,
        dropDownToggle : {
            Message : false,
            Notification : false,
            Profile : false
        }
    };

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

    onSelectCollapse = (event) => {
        let name = event.target.getAttribute('name');
        if (name == undefined) {
            name = event.target.parentElement.getAttribute('name');
        }

        if(name=='home'){
            this.props.history.push("/");
        }

        if(this.state.selectedCollapse === name){
            this.setState({
                selectedCollapse: ''
            });
        } else {
            this.setState({
                selectedCollapse: name
            });
        }
    };

    onSelectSidebar = (data) => {
        this.setState({
            selectedSidebar: data.target.name
        });
    };

    onToggleSidebar = () => {
        this.setState({
            isToggleSidebar: !this.state.isToggleSidebar
        })
    };

    onToggleLoginModal = () => {
        this.setState({
            isOpenLoginModal: !this.state.isOpenLoginModal
        })
    };

    render() {
        let toggled = false;
        let icon = null;
        if(this.state.isToggleSidebar){
            toggled = true;
        }

        if(this.state.isToggleSidebar) {
            icon = fa.faArrowRight;
        } else {
            icon = fa.faArrowLeft;
        }

        return (
            <React.Fragment>
                <Route
                    path="/"
                    render={({location, history}) => (
                        <Header onToggleDropDown={this.onToggleDropDown}
                                messageToggle={this.state.dropDownToggle.Message}
                                notiToggle={this.state.dropDownToggle.Notification}
                                profileToggle={this.state.dropDownToggle.Profile}
                                onToggleSidebar={this.onToggleSidebar}
                                icon={icon}
                        />

                    )}
/*                    render={props => (<Header props={props}
                                              isToggleSidebar={this.state.isToggleSidebar}
                                                onToggleLoginModal={this.onToggleLoginModal}/>)}*/
                />
                <Route
                    render={props => (<LoginModal props={props} onToggleLoginModal={this.onToggleLoginModal}
                                              isOpen={this.state.isOpenLoginModal}/>)}
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
                    <MainWrapper>
                        <Switch>
                            {/* HOME */}
                            <Route exact path="/"
                                   render={({match, history, location}) =>
                                       <Home match={match} history={history} location={location} title={"홈"} icon={fa.faHome} />}
                            />

                            {/* BOARD */}
                            <Route exact path="/board/all"
                                   render={({match, history, location}) =>
                                       <Board match={match} history={history} location={location} title={"전체"} icon={fa.faGlobeAsia} />}
                            />

                            {/* */}
                            <Route exact path="/board/qna"
                                   render={({match, history, location}) =>
                                       <Board match={match} history={history} location={location} title={"Q&A"} icon={fa.faQuestionCircle} />}
                            />
                        </Switch>
                    </MainWrapper>
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