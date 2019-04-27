import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import * as rs from 'reactstrap';
import styled from 'styled-components';

import NavItem from './NavItem.jsx';


// Navbar

const NavBarMain = styled.div`
    height: 100%;
    width: 100%;
    padding: 0 !important;
    padding-top: 10px;
    border-right: 1px solid black;
    margin-bottom: 12px;
    background-color: #1a2942;
`;

const NavBody = styled(rs.Col)`
    
`

const NavRow = styled(rs.Row)`
    margin: 0;
`;

class Navbar extends React.Component {

    render() {
        const {menus, selectedCollapse, selectedSidebar} = this.props;

        const items = menus.map((data, i) => {
            return (<NavItem
                title={data.head}
                icon={data.icon}
                items={data.items}
                selectedCollapse={selectedCollapse}
                selectedSidebar={selectedSidebar}
                onSelectCollapse={this.props.onSelectCollapse}
                onSelectSidebar={this.props.onSelectSidebar}
                isToggleSidebar={this.props.isToggleSidebar}
                NavbarStyled={this.props.NavbarStyled}
                key={i}/>);
        });

        return (
            <React.Fragment>
                <div>
                    <NavRow>
                        <NavBody xs="12">
                            <rs.Row>
                                {items}
                            </rs.Row>
                        </NavBody>
                    </NavRow>
                </div>
            </React.Fragment>
        );
    }

}

export default Navbar;