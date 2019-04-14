import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';

import * as rs from 'reactstrap';
import styled from 'styled-components';

import NavItemInner from './NavItemInner.jsx';

// sideItem

const SideItemCol = styled(rs.Col)`
    color: white;
    text-align: center;
    text-vertical: middle;
    padding: 0;
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

const LeftIconSpan = styled.span`
    display: inline-block;
    height: 20px;
    width: 24px;
    line-height: 25px;
    text-align: center;
    position: relative;
    left: 0;
    font-size: 18px;
    margin-right: 14px;
`

const LeftIcon = styled(FontAwesomeIcon)`
    padding-top: 1px;
`

const RightIconSpan = styled.span`
    height: 20px;
    width: 24px;
    line-height: 25px;
    position: absolute;
    right: 10px;
    font-size: 17px;
    
    
`

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


const Collapse = styled(rs.Collapse)`
    margin: 0;
`;


const ListGroup = styled(rs.ListGroup)`
    padding-left: 50px;
    text-align: left !important;
    background-color: #192532;
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
        const {title, items, selectedCollapse, selectedSidebar} = this.props;

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
                <LeftIconSpan><LeftIcon icon={this.props.icon}/></LeftIconSpan>
                <span>{title}</span>
                <RightIconSpan><RightIcon icon={fa.faChevronRight}/></RightIconSpan>
            </CollapseButton>);

        return (
            <React.Fragment>
                <SideItemCol xs={12}>
                    {CollapseButtonRtn}
                    <Collapse isOpen={isOpen}>
                        <ListGroup>
                            {item}
                        </ListGroup>
                    </Collapse>
                </SideItemCol>
            </React.Fragment>
        );
    }

}

export default NavItem;