import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './layout/Header.jsx';
import Home from './content/home/Home.jsx';
import Code from './content/code/Code.jsx';
import Navbar from './navbar/Navbar.jsx';
import LoginModal from './modal/LoginModal.jsx';
import Board from "./content/board/Board.jsx";

import NavbarContainer from './containers/NavbarContainer.jsx'; // Navbar컨테이너 불러오기

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


                <Route
                    render={({history}) => (
                        <NavbarStyled
                            toggled={toggled.toString()}
                        >
                            <NavbarContainer history={history}/>
                        </NavbarStyled>

                    )}
                    /*                    render={props => (<Header props={props}
                                                                  isToggleSidebar={this.state.isToggleSidebar}
                                                                    onToggleLoginModal={this.onToggleLoginModal}/>)}*/
                />

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