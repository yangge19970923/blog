import React, {Component} from 'react'
import './index.less'

import headImg from '../../assets/img/headImg.png'

export default class LeftNav extends Component {
    render() {
        return (
            <div className="leftNav">
                <div className="content round">
                    <div className="info">
                        <div className="headImg">
                            <img src={headImg} alt=""/>
                        </div>
                        <p className="name">衫小小寨</p>
                        <p className="autograph">衫小寨的DEMO站</p>
                        <div className="recommend">
                            <span className="iconfont icon-weibo"></span>
                            <span className="iconfont icon-bzhan"></span>
                            <span className="iconfont icon-qita"></span>
                        </div>
                    </div>
                    <ul className="func">
                        <li className="func-item">首页</li>
                        <li className="func-item">示例页面</li>
                        <li className="func-item">其他版式</li>
                        <li className="func-item">下载安装</li>
                        <li className="func-item">其他主题</li>
                        <li className="func-item"><input type="text" placeholder="搜索"/></li>
                    </ul>
                    <div className="func-click">
                        <span className="iconfont icon-gongneng"></span>
                    </div>
                </div>
            </div>
        )
    }
}