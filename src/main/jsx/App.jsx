import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavbarContainer from './containers/NavbarContainer.jsx'; // Navbar컨테이너 불러오기
import HeaderContainer from './containers/HeaderContainer.jsx'; // Header컨테이너 불러오기
import ModalContainer from './containers/ModalContainer.jsx'; // Modal컨테이너 불러오기
import MainContainer from './containers/MainContainer.jsx'; // Main컨테이너 불러오기

class App extends React.Component {

    render() {

        return (
            <React.Fragment>
                <Route
                    render={() => (
                        <HeaderContainer />
                    )}
                />
                <Route
                    render={() => (
                        <ModalContainer />
                    )}
                />


                <Route
                    render={() => (
                        <NavbarContainer />

                    )}
                />

                <Route
                    render={() => (
                        <MainContainer />

                    )}
                />
            </React.Fragment>
        );
    }
}

export default App;