import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {} from 'reactstrap';
import styled from 'styled-components';

import {faHome, faGlobeAsia, faQuestionCircle} from "@fortawesome/free-solid-svg-icons/index";

import Home from '../content/home/Home.jsx';
import Board from "../content/board/Board.jsx";

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


class Main extends React.Component {

    render() {
        const {
            toggledNavbar } = this.props;

        return (
            <React.Fragment>
                <MainComponent
                    toggled={toggledNavbar.toString()}
                >
                    <MainWrapper>
                        <Switch>
                            {/* HOME */}
                            <Route exact path="/"
                                   render={({match, history, location}) =>
                                       <Home match={match} history={history} location={location} title={"홈"} icon={faHome} />}
                            />

                            {/* BOARD */}
                            <Route exact path="/board/all"
                                   render={({match, history, location}) =>
                                       <Board match={match} history={history} location={location} title={"전체"} icon={faGlobeAsia} />}
                            />

                            {/* */}
                            <Route exact path="/board/qna"
                                   render={({match, history, location}) =>
                                       <Board match={match} history={history} location={location} title={"Q&A"} icon={faQuestionCircle} />}
                            />

                        </Switch>
                    </MainWrapper>
                </MainComponent>
            </React.Fragment>
        );
    }
}

export default Main;