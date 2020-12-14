import React, {Component} from "react"
import "./index.less"

export default class Info extends Component {
    state = {
        headImgUrl: 'headImg.png',
        userName: 'TE',
        autograph: '努力努力再努力'
    }
    render() {
        return (
            <div className="mine-info">
                <div className="mine-infoHead">
                    <img src={require("../../../assets/img/" + this.state.headImgUrl).default} alt=""/>
                </div>
                <div className="mine-infoInfo">
                    <p className="mine-infoInfo-userName">{this.state.userName}</p>
                    <p className="mine-infoInfo-autograph">{this.state.autograph}</p>
                </div>
                <div className="mine-infoEdit">
                    <div className="mine-infoEdit-button">编辑个人资料</div>
                </div>
            </div>
        )
    }
}