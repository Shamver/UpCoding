import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import { Route, Switch } from 'react-router-dom';

import * as rs from 'reactstrap';
import styled from 'styled-components';

import SideItemInner from './SideItemInner.jsx';

// sideItem

const SideItemCol = styled(rs.Col)`
    color: white;
    padding: 10px 0;
    text-align: center;
    text-vertical: middle;
`;

const CollapseButton = styled(rs.Button)`
    font-size: 1.2rem;
    width: 100%;
    padding: 6px 0px 4px 0px;
    margin: 0;
    background-color: #7E7C93;
    color: white;
    border: none;
    border-radius: 0;
    outline: none;
    box-shadow: none;
    &.active {
        background-color: #354561 !important;
        color: white !important;
        
        &:after {
           font-family: "Font Awesome 5 Free";
           content: "\\f151";
           display: inline-block;
           padding-left: 8px;
           padding-bottom: 2px;
           vertical-align: middle;
           font-weight: 900;
           font-size: 1.3rem;
        }
    }
    &:hover {
        background-color: #466585 !important;
        color: white !important;
    }
    &.disabled {
        &:hover {
            cursor: not-allowed !important;
        }
    }
    
    &:after {
       font-family: "Font Awesome 5 Free";
       content: "\\f150";
       display: inline-block;
       padding-left: 8px;
       padding-bottom: 2px;
       vertical-align: middle;
       font-weight: 900;
       font-size: 1.3rem;
    }
`;

const Collapse = styled(rs.Collapse)`
    margin-top: 5px;
`;


const ListGroup = styled(rs.ListGroup)`

`;


class SideItem extends React.Component {

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
            return (<SideItemInner
                name={data.name}
                to={data.to}
                onSelectSidebar={this.props.onSelectSidebar}
                selectedSidebar={selectedSidebar}
                key={i}/>);
        });

        const isSigned = this.props.user.isSigned;

        let CollapseButtonRtn;
            if(isSigned){
                CollapseButtonRtn = (
                    <CollapseButton
                        name={title}
                        onClick={this.props.onSelectCollapse}
                        style={{outline: 'none', boxShadow: 'none'}}
                        disabled={false}
                        active={isOpen}
                    >{title}</CollapseButton>)

            } else {
                CollapseButtonRtn= (<CollapseButton
                    name={title}
                    style={{outline: 'none', boxShadow: 'none'}}
                    disabled={true}
                >{title}</CollapseButton>)
            }

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

export default SideItem;