import React, {Component} from "react";
import "./index.less"

export default class Login extends Component {
    state = {
        turnRegister: false,
        registerText: '注册'
    }

    handleTurn(e) {
        this.setState({
            turnRegister: !this.state.turnRegister,
            registerText: '登录'
        })
    }

    render() {
        return (
            <div className="login">
                <div className="loginForm">
                    <label htmlFor="userName" className="loginForm-userName">
                        <input type="text" id="userName" defaultValue="" placeholder="请输入用户姓名"/>
                    </label>
                    <label htmlFor="passWord" className="loginForm-passWord">
                        <input type="text" id="passWord" defaultValue="" placeholder="请输入密码"/>
                    </label>
                    {
                        this.state.turnRegister ? 
                        <div className="loginForm2">
                            <label htmlFor="passWord" className="loginForm-passWord">
                                <input type="text" id="passWord" defaultValue="" placeholder="请再次输入密码"/>
                            </label>
                            <label htmlFor="passWord" className="loginForm-passWord">
                                <input type="text" id="passWord" defaultValue="" placeholder="请输入电子邮箱"/>
                            </label>
                            <label htmlFor="passWord" className="loginForm-passWord">
                                <input type="text" id="passWord" defaultValue="" placeholder="请输入验证码"/>
                            </label>
                        </div> : ""
                    }
                    <p className="loginForm-register">
                        <span onClick={e => this.handleTurn(e)}>{this.state.registerText}</span>
                    </p>
                    <div className="loginForm-login">
                        <button>登录</button>
                    </div>
                </div>
            </div>
        )
    }
}