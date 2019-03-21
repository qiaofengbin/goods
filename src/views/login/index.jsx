import React, { Component } from 'react';
import Header from '../../components/header'
import axios from 'axios';
// import fetch from 'fetch';
import './css/style.css'
import Drawer from './js/lib.js'

class Login extends Component {
    constructor(props) {
        super(props)
        // 绑定this
        // this._logoBtn = this._logoBtn.bind(this)
        this.state = {
            username: '',
            password: '',
            unameHelp: "",
            upassHelp: ""
        }
    }
    handleChange(e) {
        // 方法二
        // let o = {};
        // o[e.target.name] = e.target.value;
        // this.setState(o)
        // 法一
        switch (e.target.name) {
            case 'TPL_username':
                this.setState({
                    username: e.target.value
                })
                break;
            case 'TPL_password':
                this.setState({
                    password: e.target.value
                })
                break;
            default:
                break;
        }

    }
    _logoBtn() {
        const { username, password } = this.state;
        const data = { username, password };
        if (username.length == 0) {
            this.setState({
                unameHelp: '* 用户名不能为空'
            })
            return;
        } else if (password.length == 0) {
            this.setState({
                unameHelp: '',
                upassHelp: '* 密码不能为空'
            })
            return;
        } else {
            this.setState({
                unameHelp: '',
                upassHelp: ''
            })
            axios('/api/login', data)
                .then(res => {
                    const obj = res.data;
                    localStorage.setItem('userInfo', JSON.stringify(obj));
                    this.props.history.push('/home')
                })
        }
    }
    render() {
        return (
            // <div className="login_page">
            //   {/* <canvas id="canvas"></canvas> */}

            // </div>
            <div className="login_page">
                <Header>
                    <div>
                        <h1>登录页</h1>
                    </div>
                </Header>
                <div className="am-list">
                    <div className="am-list-item">
                        <div className="am-list-control">
                            <input type="text" className="am-input-required" name="TPL_username" placeholder="手机号/邮箱/会员名" value={this.state.username} ref="uname" id="username" onChange={this.handleChange.bind(this)} />
                        </div>
                    </div>
                    <div className="am-list-action">
                        <span className="help-block">{this.state.unameHelp}</span>
                    </div>

                    <div className="am-list-item">
                        <div className="am-list-control">
                            <input type="password" className="am-input-required am-input-required-password" name="TPL_password" value={this.state.password} ref="upass" placeholder="请输入密码" id="password" onChange={this.handleChange.bind(this)} />
                        </div>
                    </div>
                    <div className="am-list-action">
                        <span className="help-block">{this.state.upassHelp}</span>
                    </div>
                </div>
                <div>
                    <span>用户名：admin</span>
                    <span>密码：admin</span>
                </div>
                <div className="am-field am-fieldBottom">
                    <button type="button" onClick={this._logoBtn.bind(this, this.state.username, this.state.password)} className="am-button am-button-submit" id="btn-submit">登 录</button>
                </div>
            </div>
        )
    }
    componentDidMount() {
        // Drawer()
    }
}
export default Login;









