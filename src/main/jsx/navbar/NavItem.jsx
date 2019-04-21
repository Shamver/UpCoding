import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';

import * as rs from 'reactstrap';
import styled from 'styled-components';

import NavItemInner from './NavItemInner.jsx';

// sideItem

// const SideItemCol = styled(rs.Col)`
//     color: white;
//     text-align: center;
//     text-vertical: middle;
//     padding: 0;
//
//     ${({xs}) => (xs ? "opacity: 0" : "opacity: 0")}
//
//     @media only screen and (min-width: 1200px) {
//         transition: opacity 0.2s;
//         transition-delay: 0.05s;
//         opacity: 100;
//     }
// `;
import SideItemCol from '../../resources/style/SideItemCol.js';

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

// const TextSpan = styled.span`
//     visibility: ${props => props.toggled ? "hidden" : "visible" }
//     opacity: ${props => props.toggled ? 0 : 100}
//     transition: ${props => props.toggled ? "all 0.1s" : "all 0.3s"}
//     transition-delay: ${props => props.toggled ? "0" : "0.1s"}
// `
import TextSpan from '../../resources/style/TextSpan.js';

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
`

const LeftIcon = styled(FontAwesomeIcon)`
    padding-top: 1px;
`

// const RightIconSpan = styled.span`
//     height: 20px;
//     width: 24px;
//     line-height: 25px;
//     position: absolute;
//     right: 10px;
//     font-size: 17px;
//     visibility: ${props => props.toggled ? "hidden" : "visible"}
//     opacity: ${props => props.toggled ? 0 : 100}
//     transition: ${props => props.toggled ? "all 0.1s" : "all 0.3s"}
//     transition-delay: ${props => props.toggled ? "0" : "0.1s"}
//
// `
import RightIconSpan from '../../resources/style/RightIconSpan.js';

const RightIcon = styled(FontAwesomeIcon)`
    transition: all 1s;
    
    transition: all 0.3s;
    
    ${CollapseButton}.active & {
        transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    }
`


// const Collapse = styled(rs.Collapse)`
//     margin: 0;
//     visibility: ${props => props.toggled ? "hidden" : "visible" }
//     opacity: ${props => props.toggled ? 0 : 100}
//     transition: ${props => props.toggled ? "all 0.1s" : "all 0.3s"}
//     transition-delay: ${props => props.toggled ? "0" : "0.1s"}
// `;
import Collapse from '../../resources/style/Collapse.js';

// const ListGroup = styled(rs.ListGroup)`
//     padding-left: 50px;
//     text-align: left !important;
//     background-color: #192532;
//
// `;
import ListGroup from '../../resources/style/ListGroup.js';


class NavItem extends React.Component {

    state={
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const {title, items, selectedCollapse, selectedSidebar, isToggleSidebar} = this.props;

        let isOpen = null;

        if(selectedCollapse == title){
            isOpen = true;
        } else {
            isOpen = false;
        }

        const item = items.map((data, i) => {
            return (<NavItemInner
                name={data.name}
                to={data.to}
                onSelectSidebar={this.props.onSelectSidebar}
                selectedSidebar={selectedSidebar}
                isToggleSidebar={this.props.isToggleSidebar}
                key={i}/>);
        });

        let CollapseButtonRtn = (
            <CollapseButton
                name={title}
                onClick={this.props.onSelectCollapse}
                style={{outline: 'none', boxShadow: 'none'}}
                disabled={false}
                active={isOpen}
            >
                <LeftIconSpan
                    toggled={isToggleSidebar.toString()}
                >
                    <LeftIcon icon={this.props.icon}/>
                </LeftIconSpan>
                    <TextSpan toggled={isToggleSidebar.toString()}>{title}</TextSpan>
                    <RightIconSpan toggled={isToggleSidebar.toString()}><RightIcon icon={fa.faChevronRight}/></RightIconSpan>
            </CollapseButton>);

        return (
            <React.Fragment>
                <SideItemCol toggled={isToggleSidebar.toString()} xs={12}>
                    {CollapseButtonRtn}
                    <Collapse isOpen={isOpen} toggled={isToggleSidebar.toString()}>
                        <ListGroup toggled={isToggleSidebar.toString()}>
                            {item}
                        </ListGroup>
                    </Collapse>
                </SideItemCol>
            </React.Fragment>
        );
    }

}

export default NavItem;