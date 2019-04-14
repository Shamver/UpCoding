import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import { Route, Switch,Link } from 'react-router-dom';

import * as rs from 'reactstrap';
import styled from 'styled-components';

// sideItemInner

const ListGroupItem = styled(rs.ListGroupItem)`
    color: white;
    background-color: #788593;
    padding: 0;
    margin-bottom: 5px;
    border: none;
    border-radius: .15rem !important;
    outline: none;
    box-shadow: none;
    &.active {
        background-color: #685BDE !important;
        color: white !important;
    }
    &:hover {
        background-color: #9FCEDD !important;
        color: black !important;
    }
`;

const ListLink = styled(Link)`
    color: white !important;
    padding: 2px 4px;
    text-decoration: none !important;
    outline: none;
    box-shadow: none;
    display: block !important;
    height: 100% !important;
    &.active {
        color: white !important;
    }
    &:hover {
        color: black !important;
        text-decoration: none !important;
    }
`

class SideItemInner extends React.Component {

    render() {
        const {name, to, selectedSidebar} = this.props;

        let isOpen = null;
        let realTo = to;

        if(selectedSidebar == name){
            isOpen = true;
            realTo = "/";
        } else {
            isOpen = false;
        }



        return (
            <React.Fragment>
                <ListGroupItem
                    tag={"button"}
                    active={isOpen}
                    style={{outline: 'none', boxShadow: 'none'}}
                ><ListLink to={realTo} name={name} onClick={this.props.onSelectSidebar}>{name}</ListLink></ListGroupItem>
            </React.Fragment>
        );
    }

}

export default SideItemInner;