import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import * as rs from 'reactstrap';
import * as mu from '@material-ui/core';
import styled from 'styled-components';

import NavItem from './NavItem.jsx';
import * as fa from "@fortawesome/free-solid-svg-icons/index";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";


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
    font-family : "Jeju Gothic", 'Roboto';
`;

const NavRow = styled(rs.Row)`
    margin: 0;
`;

import TextSpan from '../../resources/style/navbar/TextSpan.js';
import SideItemCol from '../../resources/style/navbar/SideItemCol.js';
import Collapse from '../../resources/style/navbar/Collapse.js';
import ListGroup from '../../resources/style/navbar/ListGroup.js';
import RightIconSpan from '../../resources/style/navbar/RightIconSpan.js';

const LeftIconSpan = styled.span`
    display: inline-block;
    height: 20px;
    width: ${props => props.toggled == "true" ? "35px" : "24px"};
    line-height: 25px;
    text-align: center;
    position: relative;
    transition: all 0.3s;
    left: 0;
    font-size: 18px;
    padding-right: ${props => props.toggled == "true" ? "2px" : "0"};
    margin-right: 14px;
`;

const LeftIcon = styled(FontAwesomeIcon)`
    padding-top: 1px;
`;


const RightIcon = styled(FontAwesomeIcon)`
    transition: all 1s;
    vertical-align : text-bottom;
    transition: all 0.3s;
    
    ${CollapseButton}.active & {
        transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    }
`;

const CollapseButton = styled(mu.Button)`
    width: 100% !important;
    height: 47px !important;
    padding: 10px 15px !important;
    position: relative !important;
    margin: 0 !important;
    background-color: #1a2942 !important;
    color: white !important;
    border: none !important;
    border-radius: 0 !important;
    outline: none !important;
    box-shadow: none !important;
    font-size: 17px !important;
    text-align: left !important;
    display : block !important;
    font-family : inherit !important;
    
    &.active {
        background-color: #e22a6f !important;
        color: white !important;
    }
    
    &:hover {
        background-color: #e22a6f !important;
        color: white !important;
    }
    
    &.disabled {
        &:hover {
            cursor: not-allowed !important;
        }
    }
`;

class Navbar extends React.Component {

    render() {
        const {menus, selectedCollapse, selectedSidebar, isToggleSidebar } = this.props;

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

        let isOpen = null;

        if(selectedCollapse === "home"){
            isOpen = true;
        } else {
            isOpen = false;
        }

        return (
            <React.Fragment>
                <div>
                    <NavRow>
                        <NavBody xs="12">
                            <rs.Row>
                                <SideItemCol toggled={isToggleSidebar.toString()} xs={12}>
                                    <CollapseButton
                                        name={"home"}
                                        onClick={this.props.onSelectCollapse}
                                        style={{outline: 'none', boxShadow: 'none'}}
                                        disabled={false}
                                        active={isOpen}
                                    >
                                        <LeftIconSpan
                                            name={"home"}
                                            toggled={isToggleSidebar.toString()}
                                        >
                                            <LeftIcon icon={fa.faHome} name={"home"}/>
                                        </LeftIconSpan>
                                        <TextSpan toggled={isToggleSidebar.toString()} name={"home"}>홈</TextSpan>
                                    </CollapseButton>
                                </SideItemCol>
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