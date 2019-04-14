import React from 'react';

import { Route, Switch } from 'react-router-dom';

import * as rs from 'reactstrap';
import ax from 'axios';


class Login extends React.Component {

    state = {
        id: '',
        pw: ''
    }

    onLogin = (e) => {
        e.preventDefault();

        var postData = {
            usernameOrEmail: this.state.id,
            password: this.state.pw
        };

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        ax.post("/api/auth/signin",
            postData,
            axiosConfig
        )
            .then((params) => {
                console.log(params); // 로그인 성공
            })
            .catch((err) => {
                console.log("!"+err); // 로그인 실패
            })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>로그인</h1>
                    <rs.Form className="form" onSubmit={this.onLogin}>
                        <rs.Col>
                            <rs.FormGroup>
                                <rs.Label htmlFor="id">ID</rs.Label>
                                <rs.Input
                                    type="text"
                                    name="id"
                                    id="id"
                                    placeholder="ID (아이디)"
                                    value={this.state.id}
                                    onChange={this.handleChange}
                                />
                            </rs.FormGroup>
                        </rs.Col>
                        <rs.Col>
                            <rs.FormGroup>
                                <rs.Label htmlFor="pw">PW</rs.Label>
                                <rs.Input
                                    type="password"
                                    name="pw"
                                    id="pw"
                                    placeholder="PW (비밀번호)"
                                    value={this.state.pw}
                                    onChange={this.handleChange}
                                />
                            </rs.FormGroup>
                        </rs.Col>
                        <rs.Button type="submit">SIGN IN</rs.Button>
                    </rs.Form>
                </div>
            </React.Fragment>
        );
    }

}

export default Login;