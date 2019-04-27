import React from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge} from 'reactstrap';
import styled from 'styled-components';
import * as fa from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import avatar from "../../../webapp/img/avatar.jpg";

const DropdownMenuAni = styled(DropdownMenu)`
    margin-top : 13px;
    width : 250px;
    height : 245px;
    box-shadow : 0 2px 5px rgba(0, 0, 0, 0.2);
    border : 0;
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

const Img = styled.img`
    line-height: 40px;
    height: 40px;
    width: 40px;
    text-align: center;
    font-size: 17px;
    border-radius: 50px;
    color: #ffffff;
`;

const ProfileImg = styled.img`
    width : 37px;
    border-radius : 50%;
    cursor : pointer;
`;

const DropDownItemHeader = styled(DropdownItem)`
    padding : 8px 26px;
    
    &:active {
        background-color : unset;
    }
    
    &:focus {
        outline : unset;
    }
    
    &:hover {
        background-color : RGBA(0,0,0,0) !important;
        cursor : default;
    }
`;

const DropDownItemCustom = styled(DropdownItem)`
    padding : 10px 20px;
    
    &:active {
        background-color : unset;
    }
    
    &:focus {
        outline : unset;
    }
    
    &:hover {
    }
`;


const ImgDiv = styled.div`
    position: relative;
    float: left;
    line-height: 1.5;
`;

const Info = styled.div`
    padding-left: 55px;
    min-height: 40px;
    height: auto;
    position: relative;
`;

const Name = styled.span`
    display: block;
    color: #515365;
    line-height: 25px;
    font-size : 14px;
    font-weight : bold;
`;

const SubMessage = styled.span`
    display: block;
    font-size: 12.5px;
    color: #adadad;
    color: rgba(138, 138, 138, 0.7);
    max-width: 90%;
    line-height: 25px;
    white-space : normal
`;

const MenuIcon = styled(FontAwesomeIcon)`
    width : 19px !important;
    height : 16px;
    position : relative;
`;

const CustomInner = styled.div`
    line-height : 1.5;
    color : rgb(138, 138, 138);
    font-weight : 400;
    font-size : 14px;
`;

const BadgeA = styled(Badge)`
    padding : 5px 10px;
    font-size : 12px;
    background-color: #03A9F4 !important;
    border-radius : 10rem;
`;

class Profile extends React.Component {
    render() {
        return (
            <DropdownInline isOpen={this.props.toggleYN} toggle={this.props.toggle}>
                <DropdownToggleCustom>
                    <ProfileImg src={avatar}/>
                </DropdownToggleCustom>
                <DropdownMenuAni right={true}>
                    <DropDownItemHeader>
                        <ImgDiv className="media-img">
                            <Img src={avatar} alt=""/>
                        </ImgDiv>
                        <Info>
                            <Name>
                                Tomas Murray
                            </Name>
                            <SubMessage>UI/UX Desinger</SubMessage>
                        </Info>
                    </DropDownItemHeader>
                    <DropDownItemCustom>
                        <CustomInner>
                            <MenuIcon icon={fa.faCog}/>
                            &nbsp;&nbsp;Setting
                        </CustomInner>
                    </DropDownItemCustom>
                    <DropDownItemCustom>
                        <CustomInner>
                            <MenuIcon icon={fa.faUser}/>
                            &nbsp;&nbsp;Profile
                        </CustomInner>
                    </DropDownItemCustom>
                    <DropDownItemCustom>
                        <CustomInner>
                            <MenuIcon icon={fa.faEnvelope}/>
                            &nbsp;&nbsp;Inbox
                            &nbsp;&nbsp;<BadgeA>2</BadgeA>
                        </CustomInner>
                    </DropDownItemCustom>
                    <DropDownItemCustom>
                        <CustomInner>
                            <MenuIcon icon={fa.faSignOutAlt}/>
                            &nbsp;&nbsp;Logout
                        </CustomInner>
                    </DropDownItemCustom>
                </DropdownMenuAni>
            </DropdownInline>
        );
    }
}

export default Profile;