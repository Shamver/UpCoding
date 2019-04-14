import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import { Route, Switch, Link } from 'react-router-dom';

import * as rs from 'reactstrap';
import styled from 'styled-components';

import SideItem from './SideItem.jsx';


// sidebar

const HeadLink = styled(Link)`
    color: white !important;
    text-decoration: none !important;
    outline: none;
    box-shadow: none;
    &:hover {
        color: #9DFFE9 !important;
        text-decoration: none !important;
    }
`

const SideBar = styled(rs.Col)`
    height: 100%;
    padding: 0 !important;
    padding-top: 10px;
    border-right: 1px solid black;
    margin-bottom: 12px;
    background: linear-gradient(to bottom, #34323E 0%, #34323E 10%, #292932 100%);
`;

const SideHead = styled(rs.Col)`
    font-size: 3rem;
    color: white;
    padding: 20px 0px 10px 0px;
    text-align: center;
    text-vertical: middle;
    margin-bottom: 10px;
    background: linear-gradient(to bottom, #52555A 0%, #494C50 90%, #34323E 100%);
`;

const SideBody = styled(rs.Col)`
    
`

const SideAdminBody = styled(rs.Col)`
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 10px;
    background: linear-gradient(to bottom, #34323E 0%, #3E2B2E 10%, #5A3E43 50%, #3E2B2E 90%, #34323E 100%);
`

const SideBodyHead = styled(rs.Col)`
    font-size: 1.5rem;
    color: white;
    text-align: center;
    text-vertical: middle;
    margin: -5px 0 20px 0;
    padding: 0;
`

const SideAdminBodyHead = styled(rs.Col)`
    font-size: 1.5rem;
    color: white;
    text-align: center;
    text-vertical: middle;
    margin: -5px 0 20px 0;
    padding: 0;
`

const SideRow = styled(rs.Row)`
    margin: 0;
`;

const ButtonWrapper = styled(rs.Col)`
    padding: 0;
`

const LoginBtn = styled(rs.Button)`
    background-color: #94DAC6;
    color: black;
    border: none;
    margin: 0.3rem;
    width: 80%;
    
    &:hover {
        background-color: #98FEF2 !important;
        color: black !important;
    }
`

const SignupBtn = styled(rs.Button)`
    background-color: #CFCFAA;
    color: black;
    border: none;
    width: 80%;
    margin: 0.3rem;
    
    &:hover {
        background-color: #FEFF9A !important;
        color: black !important;
    }
`

const LogoutBtn = styled(rs.Button)`
    background-color: #CB4243;
    color: white;
    border: none;
    margin: 0.3rem;
    width: 80%;
    
    &:hover {
        background-color: #FA3C3B !important;
        color: black !important;
    }
`

const MyInfoBtn = styled(rs.Button)`
    background-color: #82AEAC;
    color: white;
    border: none;
    margin: 0.3rem;
    width: 80%;
    
    &:hover {
        background-color: #B3E3E8 !important;
        color: black !important;
        cursor: not-allowed;
    }
`


class Sidebar extends React.Component {

    render() {
        const {head, menus, adminMenus, selectedCollapse, selectedSidebar, selectedAdminCollapse, selectedAdminSidebar, user} = this.props;

        const items = menus.map((data, i) => {
            return (<SideItem
                title={data.head}
                items={data.items}
                selectedCollapse={selectedCollapse}
                selectedSidebar={selectedSidebar}
                onSelectCollapse={this.props.onSelectCollapse}
                onSelectSidebar={this.props.onSelectSidebar}
                user={this.props.user}
                key={i}/>);
        });

        const adminItems = adminMenus.map((data, i) => {
            return (<SideItem
                title={data.head}
                items={data.items}
                selectedCollapse={selectedAdminCollapse}
                selectedSidebar={selectedAdminSidebar}
                onSelectCollapse={this.props.onSelectAdminCollapse}
                onSelectSidebar={this.props.onSelectAdminSidebar}
                user={this.props.user}
                key={i}/>);
        })

        let Buttons, AdminBody;

        if(user.isSigned){
            Buttons=(<React.Fragment>
                <ButtonWrapper xs="12">
                    <MyInfoBtn style={{outline: 'none', boxShadow: 'none'}} disabled={true}>내 정보</MyInfoBtn>
                </ButtonWrapper>
                <ButtonWrapper xs="12">
                    <LogoutBtn onClick={this.props.onChangeLogoutModal} style={{outline: 'none', boxShadow: 'none'}}>로그아웃</LogoutBtn>
                </ButtonWrapper>
            </React.Fragment>)
        } else {
            Buttons=(<React.Fragment>
                <ButtonWrapper xs="12">
                    <LoginBtn onClick={this.props.onChangeLoginModal} style={{outline: 'none', boxShadow: 'none'}}>로그인</LoginBtn>
                </ButtonWrapper>
                <ButtonWrapper xs="12">
                    <SignupBtn onClick={this.props.onChangeSignupModal} style={{outline: 'none', boxShadow: 'none'}}>회원가입</SignupBtn>
                </ButtonWrapper>
            </React.Fragment>)
        }

        if(user.isAdmin){
            AdminBody = (
                <React.Fragment>
                    <SideAdminBody xs="12">
                        <rs.Row>
                            <SideAdminBodyHead>
                                <span>관리자 전용</span>
                            </SideAdminBodyHead>
                            {adminItems}
                        </rs.Row>
                    </SideAdminBody>
                </React.Fragment>
            )
        } else {
            AdminBody = (<React.Fragment></React.Fragment>)
        }

        return (
            <React.Fragment>
                <SideBar sm={2} className="px-1 position-fixed d-none d-sm-block overflow-auto" id="sticky-sidebar">
                    <SideRow>
                        <SideHead xs={12}>
                            <HeadLink to={"/"}>{head}</HeadLink>
                            <rs.Row>
                                {Buttons}
                            </rs.Row>
                        </SideHead>
                        {AdminBody}
                        <SideBody xs="12">
                            <rs.Row>

                                <SideBodyHead>
                                    <span>카테고리</span>
                                </SideBodyHead>
                                {items}
                            </rs.Row>
                        </SideBody>
                    </SideRow>
                </SideBar>
            </React.Fragment>
        );
    }

}

export default Sidebar;