import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import styled from 'styled-components';
import * as fa from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import avatar from "../../../webapp/img/avatar-1.jpg";
import avatar2 from "../../../webapp/img/avatar-2.jpg";
import avatar3 from "../../../webapp/img/avatar-3.jpg";

const DropdownMenuAni = styled(DropdownMenu)`
    margin-top : 10px;
    position : absolute;
    border : 0;
    width : 300px;
    height : 360px;
    transition : all 0.3s !important;
    box-shadow : 0 2px 5px rgba(0, 0, 0, 0.2);
    &.show {
        padding: 8px 0 !important;
    }
`;

const MenuCircle = styled.span`
    border : 1px solid #F1F1F1;
    border-radius : 50%;
    height : 30px;
    vertical-align : middle;
    padding : 8px;
    transition : all 0.3s;
    cursor : pointer;
    line-height : 2.5;
    
    &:hover {
        text-decoration: none;
        background: #e22a6f;
        border-color: #e22a6f;
        color: #fff;
    }
`;

const MenuIcon = styled(FontAwesomeIcon)`
    width : 21px !important;
    height : 16px;
`;

const DropdownInline = styled(Dropdown)`
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

const DropdownItemHeader = styled(DropdownItem)`
    padding : 10px 20px;
    font-weight : 400;
    text-align : center;
    cursor : unset !important;
    margin-bottom : 8px;
    
    &:active {
        background-color : unset;
    }
    
    &:focus {
        outline : unset;
    }
`;



const Colorh6 = styled.div`
    line-height : 1.5;
    color : #515365;
    font-size : 17px !important;
`;

const DropDownItemCustom = styled(DropdownItem)`
    padding : 10px 20px;
    &:active {
        background-color : unset;
    }
    &:focus {
        outline : unset;
    }
`;

const DropdownItemFooter = styled(DropDownItemCustom)`
    margin-top : 10px;
`;

const Info = styled.div`
    padding-left: 55px;
    min-height: 40px;
    height: auto;
    position: relative;
`;

const ImgDiv = styled.div`
    position: relative;
    float: left;
    line-height: 1.5;
`;

const Name = styled.span`
    display: block;
    color: #515365;
    line-height: 1.5;
    font-size : 14px;
`;

const SubMessage = styled.span`
    display: block;
    font-size: 12.5px;
    color: #adadad;
    color: rgba(138, 138, 138, 0.7);
    max-width: 90%;
    line-height: 1.5;
    white-space : normal
`;

const FooterMessage = styled.span`
    display: block;
    font-size: 14px;
    text-align : center;
    line-height: 1.5;
    color: #8A8A8A
`;

const MenuCircleBell = styled(MenuCircle)`
    background-color: #e22a6f !important;
    border : 0;
    color : white;
`;

const MenuCircleComment = styled(MenuCircle)`
    background-color: #24d5d8 !important;
    border : 0;
    color : white;
`;

const MenuCircleFriend = styled(MenuCircle)`
    background-color: #00E676 !important;
    border : 0;
    color : white;
`;

const MenuCircleMessage = styled(MenuCircle)`
    background-color: #ab8ce4 !important;
    border : 0;
    color : white;
`;



class Notification extends React.Component {

    render() {
        return (
            <DropdownInline isOpen={this.props.toggleYN} toggle={this.props.toggle}>
                <DropdownToggleCustom >
                    <MenuCircle>
                        <MenuIcon icon={fa.faBell} />
                    </MenuCircle>
                </DropdownToggleCustom>
                <DropdownMenuAni right={true}>
                    <DropdownItemHeader>
                        <Colorh6><MenuIcon icon={fa.faBell} />&nbsp;Notifications</Colorh6>
                    </DropdownItemHeader>
                    <DropDownItemCustom>
                        <ImgDiv>
                            <MenuCircleBell>
                                <MenuIcon icon={fa.faEnvelope} />
                            </MenuCircleBell>
                        </ImgDiv>
                        <Info>
                            <Name>
                                5 new messages
                            </Name>
                            <SubMessage>4 min ago</SubMessage>
                        </Info>
                    </DropDownItemCustom>
                    <DropDownItemCustom>
                        <ImgDiv className="media-img">
                            <MenuCircleComment>
                                <MenuIcon icon={fa.faCommentAlt} />
                            </MenuCircleComment>
                        </ImgDiv>
                        <Info>
                            <Name>
                                4 new comments
                            </Name>
                            <SubMessage>12 min ago</SubMessage>
                        </Info>
                    </DropDownItemCustom>
                    <DropDownItemCustom>
                        <ImgDiv className="media-img">
                            <MenuCircleFriend>
                                <MenuIcon icon={fa.faUserFriends} />
                            </MenuCircleFriend>
                        </ImgDiv>
                        <Info>
                            <Name>
                                3 Friend Requests
                            </Name>
                            <SubMessage>a day ago</SubMessage>
                        </Info>
                    </DropDownItemCustom>
                    <DropDownItemCustom>
                        <ImgDiv className="media-img">
                            <MenuCircleMessage>
                                <MenuIcon icon={fa.faComment} />
                            </MenuCircleMessage>
                        </ImgDiv>
                        <Info>
                            <Name>
                                2 new messages
                            </Name>
                            <SubMessage>12 min ago</SubMessage>
                        </Info>
                    </DropDownItemCustom>
                    <DropdownItemFooter>
                        <FooterMessage>Check all notifications</FooterMessage>
                    </DropdownItemFooter>
                </DropdownMenuAni>
            </DropdownInline>
        );
    }
}

export default Notification;