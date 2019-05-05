import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import { Link } from 'react-router-dom';

import * as rs from 'reactstrap';
import styled from 'styled-components';

import * as mu from '@material-ui/core';

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
    font-size: 16px;
    text-decoration: none !important;
    outline: none;
    box-shadow: none;
    display: block !important;
    padding-left : 65px; 
    height: 100% !important;
    transition: all 0.3s;
    line-height : 42px;
    width : 100%;
    ${ListItem}.active & {
        color: white !important;
        background: none !important;
    }
    &:hover {
        color: white !important;
        text-decoration: none !important;
    }
`;

const ListItem = styled(mu.ListItem)`
    padding : 0px 0px !important;
    height : 42px;
`;

class NavItemInner extends React.Component {

    render() {
        const {name, to, selectedSidebar} = this.props;

        let isOpen = null;
        let realTo = to;

        if(selectedSidebar == name){
            isOpen = true;
        } else {
            isOpen = false;
        }



        return (
            <React.Fragment>
{/*                <ListGroupItem
                    toggled={this.props.isToggleSidebar.toString()}
                    tag={"button"}
                    active={isOpen}
                ><ListLink to={realTo} name={name} onClick={this.props.onSelectSidebar}>{name}</ListLink></ListGroupItem>*/}
                <ListItem button
                          toggled={this.props.isToggleSidebar.toString()}
                          tag={"button"}
                          className={isOpen ? "active" : ""}
                >
                    <ListLink to={realTo} name={name} onClick={this.props.onSelectSidebar}>{name}</ListLink>
                </ListItem>
            </React.Fragment>
        );
    }

}

export default NavItemInner;