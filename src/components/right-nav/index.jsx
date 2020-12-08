import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.less'
export default class RightNav extends Component {
    state = {
        recentArticles: [],
        classList:[]
    }

    componentDidMount () {
        this.setState({
            recentArticles: [" 剪影流殇，光影华年", "我想走遍世界每一个角落", "2020年初随笔", "如许相诺，谁念", "下辈子，我想当个主子"],
            classList: ["工作笔记", "心情随笔", "旅行日记", "胡吃海塞"]
        })
    }

    render() {
        return (
            <div className="rightNav">
                <div className="rightNav-content">
                    <div className="rightNav-content-top">
                        <div className="rightNav-content-top-title">
                            近期文章
                        </div>
                        <div className="rightNav-content-topContent">
                            {
                                this.state.recentArticles.map(item => (
                                    <div key={item} className="rightNav-content-topContent-item">
                                        {item}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="rightNav-content-bottom">
                        <div className="rightNav-content-bottom-title">
                            分类目录
                        </div>
                        <div className="rightNav-content-bottomContent">
                            {
                                this.state.classList.map((item, index) => (
                                    <div key={item} className="rightNav-content-bottomContent-item">
                                        <Link to="/classification">
                                            {item}
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}