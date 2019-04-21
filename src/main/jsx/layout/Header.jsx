import React from 'react';

import * as rs from 'reactstrap';
import styled from 'styled-components';

const HeaderTop = styled.div`
    position: fixed;
    height: 65px;
    width: 100%;
    background-color: black;
`

class Header extends React.Component {

    render() {
        return (
            <React.Fragment>
                <HeaderTop>
                    <rs.Button onClick={this.props.onToggleSidebar}>ㄱ</rs.Button>
                </HeaderTop>
            </React.Fragment>
        );
    }

}

export default Header;