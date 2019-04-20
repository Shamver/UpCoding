import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import styled from 'styled-components';
import * as fa from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import avatar from "../../../webapp/img/avatar.jpg";

const DropdownMenuAni = styled(DropdownMenu)`
    margin-top : 12px;
    &.show {
        transition : all 0.5s;
    }
`;

const DropdownInline =styled(Dropdown)`
    display : inline;
`;

const DropdownToggleCustom  = styled(DropdownToggle)`
    background-color : RGBA(0,0,0,0);
    color : rgb(138, 138, 138);
    border : 0;
    padding : 0px;
    &:hover {
        background-color : RGBA(0,0,0,0);
    }
    
    &:focus {
        background-color : RGBA(0,0,0,0);
        box-shadow : none !important;
    }
    
    &:active {
        background-color : RGBA(0,0,0,0) !important;
        border : 0;
        color : inherit !important;
    }
`;

const ProfileImg = styled.img`
    width : 37px;
    border-radius : 50%;
    cursor : pointer;
`;

class Profile extends React.Component {
    render() {
        return (
            <DropdownInline isOpen={this.props.toggleYN} toggle={this.props.toggle}>
                <DropdownToggleCustom>
                    <ProfileImg src={avatar}/>
                </DropdownToggleCustom>
                <DropdownMenuAni right={true}>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem>Some Action</DropdownItem>
                    <DropdownItem disabled>Action (disabled)</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Foo Action</DropdownItem>
                    <DropdownItem>Bar Action</DropdownItem>
                    <DropdownItem>Quo Action</DropdownItem>
                </DropdownMenuAni>
            </DropdownInline>
        );
    }
}

export default Profile;