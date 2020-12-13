import React, {Component} from "react"

import './index.less'

function Empty() {
    return (
        <div className="detail-comment-cotent-empty">
            <span className="iconfont icon-shafa"></span>
            <p>还没有评论</p>
        </div>
    )
}

class Speak extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showFlag: false
        }
    }

    showToast(e) {
        this.setState({
            showFlag: !this.state.showFlag
        })
    }

    render() {
        return (
            <div className="detail-comment-cotent-speak">
                <ul className="detail-comment-cotent-speakC">
                    <li className="detail-comment-cotent-speakC-item">
                        <div className="detail-comment-cotent-speakC-item-speakImg">
                            <img src={require("../../../assets/img/headImg.png").default} alt=""/>
                        </div>
                        <div className="detail-comment-cotent-speakC-item-content">
                            <p className="detail-comment-cotent-speakC-item-contentName">
                                TE2020
                            </p>
                            <p className="detail-comment-cotent-speakC-item-contentTime">
                                <span>2020-04-08 15:22</span>|<span onClick={ e => this.showToast(e)}>回复</span>
                            </p>
                            <p className="detail-comment-cotent-speakC-item-contentSay">
                                还可以，加油
                            </p>
                            {this.state.showFlag ? <Toast /> : ''} 
                            <ul className="detail-comment-cotent-speakC detail-comment-cotent-speakC-child round">
                                {
                                    this.props.said.map(item => (
                                        <li className="detail-comment-cotent-speakC-item" key={item.id}>
                                            <div className="detail-comment-cotent-speakC-item-speakImg">
                                                <img src={require("../../../assets/img/" + item.imgUrl).default} alt=""/>
                                            </div>
                                            <div className="detail-comment-cotent-speakC-item-content">
                                                <p className="detail-comment-cotent-speakC-item-contentName">
                                                    {item.name}
                                                </p>
                                                <p className="detail-comment-cotent-speakC-item-contentTime">
                                                    <span className="detail-comment-cotent-speakC-child-time">{item.time}</span>
                                                </p>
                                                <p className="detail-comment-cotent-speakC-item-contentSay">
                                                    {item.said}
                                                </p>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

function Toast() {
    return (
        <div className="detail-comment-tosat">
            <textarea name="" id=""></textarea>
            <div className="detail-comment-tosat-button">
                <button>评论</button>
            </div>
        </div>
    )
}

export default class Comment extends Component {
    state = {
        said: [
            {
                id: 1,
                imgUrl:'headImg.png',
                name: 'TE',
                time: '2020-04-08 15:22',
                said:'还可以，加油'
            },
            {
                id: 2,
                imgUrl:'headImg.png',
                name: 'TE2',
                time: '2020-04-08 15:23',
                said:'还可以，加油'
            },
            {
                id: 3,
                imgUrl:'headImg.png',
                name: 'TE',
                time: '2020-04-08 15:32',
                said:'还可以，加油'
            },
        ],
        showFlag: false
    }
    
    handleOpenSaid(e) {
        console.log(this);
        this.setState({
            showFlag: true
        })
    }

    handleCloseSaid(e) {
        e.stopPropagation();
        this.setState({
            showFlag: false
        })
    }

    render() {
        return (
            <div className="detail-comment">
                <div className="detail-comment-title">
                    评论
                </div>
                <div className="detail-comment-cotent">
                    { false ? <Empty /> : <Speak said={this.state.said}/> }
                </div>
                <div className="detail-comment-say round">
                    <div className="detail-comment-say-icon">
                        <span className="iconfont icon-touxiang1"></span>
                    </div>
                    <div className="detail-comment-say-said" onClick={(e) => this.handleOpenSaid(e)}>
                        {this.state.showFlag ? 
                        <div className="detail-comment-say-saidC">发表评论<span className="iconfont icon-cuohao" onClick={(e) => this.handleCloseSaid(e)}></span></div>
                        : '说点什么'}
                    </div>
                </div>
                {this.state.showFlag ? <Toast /> : ''}
                
            </div>
        )
    }
}