import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import * as rs from 'reactstrap';
import styled from 'styled-components';

import NavbarItem from './NavbarItem.jsx';
import * as fa from "@fortawesome/free-solid-svg-icons/index";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";


// Navbar

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

import TextSpan from '../../../resources/style/navbar/TextSpan.js';
import SideItemCol from '../../../resources/style/navbar/SideItemCol.js';
import ListGroup from "../../../resources/style/navbar/ListGroup";
import RightIconSpan from "../../../resources/style/navbar/RightIconSpan";

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

const CollapseButton = styled(rs.Button)`
    width: 100%;
    height: 47px;
    padding: 10px 15px;
    position: relative;
    margin: 0;
    background-color: #1a2942;
    color: white;
    border: none;
    border-radius: 0;
    outline: none;
    box-shadow: none;
    font-size: 17px;
    text-align: left !important;
    
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
        const {menus, onSelectSidebar, onSelectSidebarItem, selectedSidebar, selectedSidebarItem, toggledNavbar } = this.props;

        const items = menus.map((data, i) => {
            return (<NavbarItem
                title={data.head}
                icon={data.icon}
                items={data.items}
                selectedSidebar={selectedSidebar}
                selectedSidebarItem={selectedSidebarItem}
                onSelectSidebar={onSelectSidebar}
                onSelectSidebarItem={onSelectSidebarItem}
                toggledNavbar={toggledNavbar}
                key={i}/>);
        });

        let isOpen = null;

        console.log(selectedSidebar);
        if(selectedSidebar == "home"){
            isOpen = true;
        } else {
            isOpen = false;
        }

        return (
            <React.Fragment>
                <NavbarStyled
                    toggled={toggledNavbar.toString()}
                >
                    <div>
                        <NavRow>
                            <NavBody xs="12">
                                <rs.Row>
                                    <SideItemCol toggled={toggledNavbar.toString()} xs={12}>
                                        <CollapseButton
                                            name={"home"}
                                            onClick={onSelectSidebar}
                                            style={{outline: 'none', boxShadow: 'none'}}
                                            disabled={false}
                                            active={isOpen}
                                        >
                                            <LeftIconSpan
                                                name={"home"}
                                                toggled={toggledNavbar.toString()}
                                            >
                                                <LeftIcon icon={fa.faHome} name={"home"}/>
                                            </LeftIconSpan>
                                            <TextSpan toggled={toggledNavbar.toString()} name={"home"}>홈</TextSpan>
                                        </CollapseButton>
                                    </SideItemCol>
                                    {items}
                                </rs.Row>
                            </NavBody>
                        </NavRow>
                    </div>
                </NavbarStyled>

            </React.Fragment>
        );
    }

}

export default Navbar;