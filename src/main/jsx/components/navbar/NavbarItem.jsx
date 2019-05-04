import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';
import * as rs from 'reactstrap';
import styled from 'styled-components';
import NavbarItemInner from './NavbarItemInner.jsx';
import TextSpan from '../../../resources/style/navbar/TextSpan.js';
import SideItemCol from '../../../resources/style/navbar/SideItemCol.js';
import Collapse from '../../../resources/style/navbar/Collapse.js';
import ListGroup from '../../../resources/style/navbar/ListGroup.js';
import RightIconSpan from '../../../resources/style/navbar/RightIconSpan.js';

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
    padding-bottom : 1px;
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

class NavbarItem extends React.Component {

    state={
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const {title, items, icon, selectedSidebar, selectedSidebarItem, onSelectSidebar, onSelectSidebarItem, toggledNavbar} = this.props;

        let isOpen = null;

        if(selectedSidebar === title){
            isOpen = true;
        } else {
            isOpen = false;
        }

        const item = items.map((data, i) => {
            return (<NavbarItemInner
                name={data.name}
                to={data.to}
                onSelectSidebarItem={onSelectSidebarItem}
                selectedSidebarItem={selectedSidebarItem}
                toggledNavbar={toggledNavbar}
                key={i}/>);
        });

        let CollapseButtonRtn = (
            <CollapseButton
                name={title}
                onClick={onSelectSidebar}
                style={{outline: 'none', boxShadow: 'none'}}
                disabled={false}
                active={isOpen}
            >
                <LeftIconSpan
                    name={title}
                    toggled={toggledNavbar.toString()}
                >
                    <LeftIcon icon={icon} name={title}/>
                </LeftIconSpan>
                <TextSpan toggled={toggledNavbar.toString()} name={title}>{title}</TextSpan>
                <RightIconSpan toggled={toggledNavbar.toString()} name={title}><RightIcon icon={fa.faChevronRight} name={title}/></RightIconSpan>
            </CollapseButton>);

        return (
            <React.Fragment>
                <SideItemCol toggled={toggledNavbar.toString()} xs={12}>
                    {CollapseButtonRtn}
                    <Collapse isOpen={isOpen} toggled={toggledNavbar.toString()}>
                        <ListGroup toggled={toggledNavbar.toString()}>
                            {item}
                        </ListGroup>
                    </Collapse>
                </SideItemCol>
            </React.Fragment>
        );
    }

}

export default NavbarItem;