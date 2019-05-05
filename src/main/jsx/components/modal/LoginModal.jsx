import React from 'react';

import {Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupAddon, Input, Button} from 'reactstrap';
import styled from 'styled-components';

import * as ax from 'axios';

import history from '../../history.jsx';


const InputC = styled(Input)`
    fontFamily : "aria"
`

const InputGroupC = styled(InputGroup)`
    margin : "10px 0px",
    color : "black !important",
`

const ModalHeaderC = styled(ModalHeader)`
    border: none;
    padding-bottom: 0.2rem;
`

const ModalBodyC = styled(ModalBody)`
    padding-top: 0.5rem;
    padding-bottom: 0;
`


const ModalFooterC = styled(ModalFooter)`
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
                    alert("로그인성공");
                    history.push("/");
                } else {
                    alert("로그인실패");
                }
            })
            .catch((err) => {
                console.log("!"+err); // api 오류
            })
    }

    render() {
        const { toggleModalLogin,
            toggleModalLoginYN} = this.props;

        return (
            <div>
                <Modal isOpen={toggleModalLoginYN} toggle={toggleModalLogin} className={this.props.className} size="lg">
                    <ModalHeaderC>
                        <span style={{fontSize: '1.5rem'}}>로그인</span>
                    </ModalHeaderC>
                    <ModalBodyC>
                        <InputGroupC>
                            <InputGroupAddon addonType="prepend">닉네임 또는 이메일주소</InputGroupAddon>
                            <InputC placeholder="Insert nickname or email.." value={this.state.id} onChange={this.handleChange} name="id" autoComplete="off"/>
                        </InputGroupC>
                        <InputGroupC>
                            <InputGroupAddon addonType="prepend">패스워드</InputGroupAddon>
                            <InputC id="pass" type="password" value={this.state.pw} placeholder="Insert password.." onChange={this.handleChange} name="pw"/>
                        </InputGroupC>
                    </ModalBodyC>
                    <ModalFooterC>
                        <Button color="primary" onClick={this.onLogin}>로그인</Button>{' '}
                        <Button color="secondary" onClick={toggleModalLogin}>닫기</Button>
                    </ModalFooterC>
                </Modal>
            </div>
        );
    }
}

export default LoginModal;