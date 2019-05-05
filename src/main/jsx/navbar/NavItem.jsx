import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';
import * as rs from 'reactstrap';
import * as mu from '@material-ui/core';
import styled from 'styled-components';
import NavItemInner from './NavItemInner.jsx';
import TextSpan from '../../resources/style/navbar/TextSpan.js';
import SideItemCol from '../../resources/style/navbar/SideItemCol.js';
import Collapse from '../../resources/style/navbar/Collapse.js';
import ListGroup from '../../resources/style/navbar/ListGroup.js';
import RightIconSpan from '../../resources/style/navbar/RightIconSpan.js';

const CollapseButton = styled(mu.ListItem)`
    width: 100% !important;
    height: 47px !important;
    padding: 11px 15px !important;
    padding-bottom : 10px !important;
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
    display : inline-block !important;
    
    &.active {
        background-color: #e22a6f !important;
        color: white !important;
    }
    
    &:focus {
        box-shadow : 0;
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
    vertical-align : sub;
`;


const RightIcon = styled(FontAwesomeIcon)`
    transition: all 1s;
    transition: all 0.3s;
    line-height: 25px;
    height : 20px;
    margin-top: 3px;

    
    ${CollapseButton}.active & {
        transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    }
`;

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

        if(selectedCollapse === title){
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
            <CollapseButton button
                  name={title}
                  onClick={this.props.onSelectCollapse}
                  disabled={false}
                  className={isOpen ? "active" : ""}
            >
                <LeftIconSpan
                    name={title}
                    toggled={isToggleSidebar.toString()}
                >
                    <LeftIcon icon={this.props.icon} name={title}/>
                </LeftIconSpan>
                <TextSpan toggled={isToggleSidebar.toString()} name={title}>{title}</TextSpan>
                <RightIconSpan toggled={isToggleSidebar.toString()} name={title}><RightIcon icon={fa.faChevronRight} name={title}/></RightIconSpan>
            </CollapseButton>
        );

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