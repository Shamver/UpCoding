import React from 'react';

import * as rs from 'reactstrap';
import styled from 'styled-components';

const grpStyle = {
    margin : "10px 0px",
    color : "black !important",
};

const inputStyle ={
    fontFamily : "aria"
};

const ModalHeader = styled(rs.ModalHeader)`
    border: none;
    padding-bottom: 0.2rem;
`

const ModalBody = styled(rs.ModalBody)`
    padding-top: 0.5rem;
    padding-bottom: 0;
`


const ModalFooter = styled(rs.ModalFooter)`
    border: none;
    padding-top: 0.5rem;
    margin: 0.1rem;
`

class LoginModal extends React.Component {

    state = {
        id: '',
        pw: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    onLogin = (e) => {
        e.preventDefault();

        if(this.state.id == "" || this.state.pw == ""){
            this.props.onChangeAlertModal("닉네임(또는 이메일)과 패스워드를 입력해주세요.");
            return;
        }

        var postData = {
            user_usernameOrEmail: this.state.id,
            user_password: this.state.pw
        };

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                "login": "true"
            }
        };

        ax.post("/api/auth/signin",
            postData,
            axiosConfig
        )
            .then((params) => { // 로그인 성공시 true 실패시 false
                if(params.data){
                    this.props.onChangeUser();
                    this.props.onChangeLoginModal();
                    this.props.onChangeAlertModal("로그인에 성공하였습니다.");
                    this.props.history.push("/");
                } else {
                    this.props.onChangeAlertModal("일치하는 닉네임(또는 이메일)이 없거나, 패스워드가 일치하지 않습니다.");
                }
            })
            .catch((err) => {
                console.log("!"+err); // api 오류
            })
    }

    render() {
        return (
            <div>
                <rs.Modal isOpen={this.props.isOpen} toggle={this.props.onToggleLoginModal} className={this.props.className} size="lg">
                    <ModalHeader>
                        <span style={{fontSize: '1.5rem'}}>로그인</span>
                    </ModalHeader>
                    <ModalBody>
                        <rs.InputGroup style={grpStyle}>
                            <rs.InputGroupAddon addonType="prepend">닉네임 또는 이메일주소</rs.InputGroupAddon>
                            <rs.Input style={inputStyle} placeholder="Insert nickname or email.." value={this.state.id} onChange={this.handleChange} name="id" autoComplete="off"/>
                        </rs.InputGroup>
                        <rs.InputGroup style={grpStyle}>
                            <rs.InputGroupAddon addonType="prepend">패스워드</rs.InputGroupAddon>
                            <rs.Input id="pass" type="password" style={inputStyle} value={this.state.pw} placeholder="Insert password.." onChange={this.handleChange} name="pw"/>
                        </rs.InputGroup>
                    </ModalBody>
                    <ModalFooter>
                        <rs.Button color="primary" onClick={this.onLogin}>로그인</rs.Button>{' '}
                        <rs.Button color="secondary" onClick={this.props.onToggleLoginModal}>닫기</rs.Button>
                    </ModalFooter>
                </rs.Modal>
            </div>
        );
    }
}

export default LoginModal;