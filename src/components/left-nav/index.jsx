import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import './index.less'

export default withRouter(class LeftNav extends Component {
    state = {
        netName:'衫小小寨',
        autograph: '衫小寨的DEMO站',
        headImgUrl:'headImg.png',
        func:[
            {
                id:1,
                name: '首页',
                url: '/home'
            },
            {
                id:2,
                name: '我的主页',
                url: '/mine'
            },
            {
                id:3,
                name: '编辑',
                url: '/edit'
            },
            {
                id:4,
                name: '登录',
                url: '/login'
            }
        ]
    }
    toNextPage(item) {
        console.log(item);
        this.props.history.push(item.url);
    }

    render() {
        return (
            <div className="leftNav">
                <div className="content round">
                    <div className="info">
                        <div className="headImg">
                            <img src={require("../../assets/img/" + this.state.headImgUrl).default} alt=""/>
                        </div>
                        <p className="name">{this.state.netName}</p>
                        <p className="autograph">{this.state.autograph}</p>
                        <div className="recommend">
                            <span className="iconfont icon-weibo"></span>
                            <span className="iconfont icon-bzhan"></span>
                            <span className="iconfont icon-qita"></span>
                        </div>
                    </div>
                    <ul className="func">
                        {
                            this.state.func.map(item => (
                                <li className="func-item" key={item.id} onClick={ e => this.toNextPage(item)}>{item.name}</li>
                            ))
                        }
                        <li className="func-item"><input type="text" placeholder="搜索"/></li>
                    </ul>
                    <div className="func-click">
                        <span className="iconfont icon-gongneng"></span>
                    </div>
                </div>
            </div>
        )
    }
})