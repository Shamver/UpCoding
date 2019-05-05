import React from 'react';

import {} from 'reactstrap';
import styled from 'styled-components';

import LoginModal from './LoginModal.jsx';


class Modal extends React.Component {

    render() {
        const { toggleModalLogin,
            toggleModalLoginYN } = this.props;

        return (
            <React.Fragment>
                <LoginModal
                    toggleModalLogin = {toggleModalLogin}
                    toggleModalLoginYN = {toggleModalLoginYN}
                />
            </React.Fragment>
        );
    }
}

export default Modal;