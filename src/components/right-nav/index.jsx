import React, {Component} from 'react'
import './index.less'
export default class RightNav extends Component {
    render() {
        return (
            <div className="rightNav">
                <div className="rightNav-content">
                    <div className="rightNav-content-top">
                        <div className="rightNav-content-top-title">
                            近期文章
                        </div>
                        <div className="rightNav-content-topContent">
                            <div className="rightNav-content-topContent-item">
                                剪影流殇，光影华年
                            </div>
                            <div className="rightNav-content-topContent-item">
                                我想走遍世界每一个角落
                            </div>
                            <div className="rightNav-content-topContent-item">
                                2020年初随笔
                            </div>
                            <div className="rightNav-content-topContent-item">
                                如许相诺，谁念
                            </div>
                            <div className="rightNav-content-topContent-item">
                                下辈子，我想当个主子
                            </div>
                        </div>
                    </div>
                    <div className="rightNav-content-bottom">
                        <div className="rightNav-content-bottom-title">
                            分类目录
                        </div>
                        <div className="rightNav-content-bottomContent">
                            <div className="rightNav-content-bottomContent-item">
                                工作笔记
                            </div>
                            <div className="rightNav-content-bottomContent-item">
                                心情随笔
                            </div>
                            <div className="rightNav-content-bottomContent-item">
                                旅行日记
                            </div>
                            <div className="rightNav-content-bottomContent-item">
                                胡吃海塞
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}