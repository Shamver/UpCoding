import React from 'react';
import styled from 'styled-components';
import logo from '../../webapp/img/shamver_upcoding.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';
import Message from './dropdown/Message.jsx';
import Notification from "./dropdown/Notification.jsx";
import Profile from "./dropdown/Profile.jsx";

const LogoImage = styled.img`
    width : 40px;
    cursor : pointer;
`;

const LogoWrapper = styled.b`
    width : 60px;
    height : 60px;
    line-height : 60px;
    display : inline-block;
    text-align : center;
`;

const LogoText = styled.h2`
    color : #E22A6F;
    font-weight : bold;
    line-height : 60px;
    cursor : pointer;
    font-family : 'cabin' ,sans-serif;
    letter-spacing: normal;
`;

const AllLogoWrapper = styled.div`
    float : left;
    display : flex;
    width : 270px;
`;

const Section_Header = styled.div`
    position : fixed;
    width : 100%;
    background : #FFFFFF;
    height : 65px;
    border-bottom: 1px solid #E9EAEC;
    color : #8A8A8A;
`;

const CollapseButton = styled.a`
    padding : 0 6px;
    line-height: calc(65px - 3px);
    min-height: calc(65px - 3px);
`;

const MenuCircle = styled.span`
    border : 1px solid #F1F1F1;
    border-radius : 50%;
    height : 30px;
    vertical-align : middle;
    padding : 8px;
    transition : all 0.3s;
    cursor : pointer;
    
    &:hover {
        text-decoration: none;
        background: #e22a6f;
        border-color: #e22a6f;
        color: #fff;
    }
`;

const MenuIcon = styled(FontAwesomeIcon)`
    width : 19px !important;
    height : 16px;
    vertical-align : center;
`;

const SearchIcon = styled(FontAwesomeIcon)`
    position : absolute;
    right : 13px;
    top : 23px;
    cursor : pointer;
     &:hover {
        color : #e22a6f;
    }
`;

const LeftNav = styled.ul`
    width : 418px;
    float : right;
    position : relative;
    margin-right : 30px;
    position: relative;
    list-style: none;
    padding-left: 0;
    margin-bottom: 0px;
`;

const List = styled.li`
    float : left;
    display : inline;
`;

const SearchBoxList = styled(List)`
    margin-right : 20px;
    position : relative;
`

const SearchBox = styled.input`
    border: 1px solid #f1f1f1;
    box-shadow: none;
    outline: none;
    height: 40px;
    margin-top: 12px;
    padding: 5px 20px;
    font-size: 14px;
    width: 250px;
    border-radius: 30px;
    transition : all 0.3s; 
    &:focus {
        border-color: #e22a6f;
    }
`;


class Header extends React.Component {

    onToggleDropDownMessage = () => {
        this.props.onToggleDropDown('Message');
    };

    onToggleDropDownNoti = () => {
        this.props.onToggleDropDown('Notification');
    };

    onToggleDropDownProfile = () => {
        this.props.onToggleDropDown('Profile');
    };

    render() {
        return (
            <Section_Header>
                <AllLogoWrapper>
                    <LogoWrapper>
                        <LogoImage src={logo}/>
                    </LogoWrapper>
                    <LogoText>UpCoding</LogoText>
                </AllLogoWrapper>
                <CollapseButton>
                    <MenuCircle>
                        <MenuIcon icon={fa.faBars} />
                    </MenuCircle>
                </CollapseButton>
                <LeftNav>
                    <SearchBoxList>
                        <SearchBox placeholder="Type to search..."></SearchBox>
                        <SearchIcon icon={fa.faSearch} />
                    </SearchBoxList>
                    <List>
                        <CollapseButton>
                            <Message toggle={this.onToggleDropDownMessage} toggleYN={this.props.messageToggle}/>
                        </CollapseButton>
                    </List>
                    <List>
                        <CollapseButton>
                            <Notification toggle={this.onToggleDropDownNoti} toggleYN={this.props.notiToggle}/>
                        </CollapseButton>
                    </List>
                    <List>
                        <CollapseButton>
                            <Profile toggle={this.onToggleDropDownProfile} toggleYN={this.props.profileToggle}/>
                        </CollapseButton>
                    </List>
                </LeftNav>

            </Section_Header>
        )
    }
}

export default Header;