import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import { Link } from 'react-router-dom';

import * as rs from 'reactstrap';
import styled from 'styled-components';

// NavItemInner

const ListGroupItem = styled(rs.ListGroupItem)`
    color: #99abb4;
    background-color: #192532;
    padding: 0;
    margin: 0;
    text-align: left !important;
    border: none;
    border-radius: .15rem !important;
    outline: none;
    box-shadow: none;
    height: 42px;
    
    
    &.active {
        background: none !important;
        color: white !important;
    }
    &:hover {
        color: white !important;
    }
`;

const ListLink = styled(Link)`
    color: #99abb4 !important;
    padding: 10px 15px;
    font-size: 16px;
    text-decoration: none !important;
    outline: none;
    box-shadow: none;
    display: block !important;
    height: 100% !important;
    transition: all 0.3s;
    ${ListGroupItem}.active & {
        color: white !important;
        background: none !important;
    }
    &:hover {
        color: white !important;
        text-decoration: none !important;
    }
`

class NavbarItemInner extends React.Component {

    render() {
        const {name, to, onSelectSidebarItem, selectedSidebarItem, toggledNavbar} = this.props;

        let isOpen = null;
        let realTo = to;

        if(selectedSidebarItem == name){
            isOpen = true;
        } else {
            isOpen = false;
        }

        return (
            <React.Fragment>
                <ListGroupItem
                    toggled={toggledNavbar.toString()}
                    tag={"button"}
                    active={isOpen}
                    style={{outline: 'none', boxShadow: 'none'}}
                ><ListLink to={realTo} name={name} onClick={onSelectSidebarItem}>{name}</ListLink></ListGroupItem>
            </React.Fragment>
        );
    }

}

export default NavbarItemInner;