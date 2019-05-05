import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge } from 'reactstrap';
import styled from 'styled-components';
import * as fa from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import avatar from '../../../../webapp/img/avatar-1.jpg'
import avatar2 from '../../../../webapp/img/avatar-2.jpg'
import avatar3 from '../../../../webapp/img/avatar-3.jpg'


const DropdownMenuAni = styled(DropdownMenu)`
    margin-top : 10px;
    width : 300px;
    height : 324px;
    border : 0;
    box-shadow : 0 2px 5px rgba(0, 0, 0, 0.2);
    font-family : 'Jeju Gothic', 'Roboto';
    &.show {
        transition : all 0.5s;
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
    vertical-align : center;
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

const BadgeH5 = styled.h5`
    display : inline;
    float : right;
`;

const BadgeA = styled(Badge)`
    padding : 5px 10px;
    font-size : 12px;
    background-color: #03A9F4 !important;
`;

const Colorh6 = styled.div`
    line-height : 1.5;
    color : #515365;
    font-size : 17px !important;
`;

const DropdownItemHeader = styled(DropdownItem)`
    padding : 10px 20px;
    font-weight : 400;
    cursor : unset !important;
    
    &:active {
        background-color : unset;
    }
    
    &:focus {
        outline : unset;
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

const Img = styled.img`
    line-height: 40px;
    height: 40px;
    width: 40px;
    text-align: center;
    font-size: 17px;
    border-radius: 50px;
    color: #ffffff;
`;

class Message extends React.Component {

    render() {
        return (
            <DropdownInline isOpen={this.props.toggleYN} toggle={this.props.toggle}>
                <DropdownToggleCustom>
                    <MenuCircle>
                        <MenuIcon icon={fa.faEnvelope} />
                    </MenuCircle>
                </DropdownToggleCustom>
                <DropdownMenuAni right={true}>
                    <DropdownItemHeader>
                        <Colorh6>쪽지  <BadgeH5><BadgeA>745</BadgeA></BadgeH5> </Colorh6>
                    </DropdownItemHeader>
                    <DropDownItemCustom>
                        <ImgDiv className="media-img">
                            <Img src={avatar} alt=""/>
                        </ImgDiv>
                        <Info>
                            <Name>
                                명지전문대 대장 윤은식
                            </Name>
                            <SubMessage>배진영, 개새끼야 뭐하냐? 피방 고? 명지전문대 내가 흔든다.</SubMessage>
                        </Info>
                    </DropDownItemCustom>
                    <DropDownItemCustom>
                        <ImgDiv className="media-img">
                            <Img src={avatar2} alt=""/>
                        </ImgDiv>
                        <Info>
                            <Name>
                                홍남수
                            </Name>
                            <SubMessage>맥주 고? 약술 고? 응암팟 고?</SubMessage>
                        </Info>
                    </DropDownItemCustom>
                    <DropDownItemCustom>
                        <ImgDiv className="media-img">
                            <Img src={avatar3} alt=""/>
                        </ImgDiv>
                        <Info>
                            <Name>
                                이수현
                            </Name>
                            <SubMessage>야동 품번추천좀. 야애니 추천좀ㅋㅋㅋㅋㅋ 개재밌더라</SubMessage>
                        </Info>
                    </DropDownItemCustom>
                    <DropDownItemCustom>
                        <FooterMessage>모두 보기</FooterMessage>
                    </DropDownItemCustom>
                </DropdownMenuAni>
            </DropdownInline>
        );
    }
}

export default Message;