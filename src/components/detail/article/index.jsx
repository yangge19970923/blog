import React, {Component} from "react"

import "./index.less"

export default class Article extends Component {
    render() {
        return (
            <div className="detail-article">
                <div className="detail-article-title">
                    剪影流殇，光影华年
                </div>
                <div className="detail-article-info">
                    <div className="detail-article-info-item name">
                        <span className="iconfont icon-touxiang"></span>
                        <span>南方姑娘</span>
                    </div>
                    <div className="detail-article-info-item class">
                        <span className="iconfont icon-cengji"></span>
                        <span>心情随笔</span>
                    </div>
                    <div className="detail-article-info-item date">
                        <span className="iconfont icon-rili"></span>
                        <span>2020-01-20</span>
                    </div>
                    <div className="detail-article-info-item look">
                        <span className="iconfont icon-yanjing"></span>
                        <span>4000</span>
                    </div>
                    <div className="detail-article-info-item collect">
                        <span className="iconfont icon-xin"></span>
                        <span>77</span>
                    </div>
                </div>
                <hr className="detail-article-border"/>
                <div className="detail-article-content">
                    3333
                </div>
                <div className="detail-article-pay">
                    <div className="detail-article-pay-content">
                        <span className="iconfont icon-qianbaoqiandaiyue"></span>
                        请我喝杯咖啡
                    </div>
                </div>
                <div className="detail-article-like">
                    <div className="detail-article-likeLeft">
                        <span className="iconfont icon-ziyuan"></span>
                        <span>6</span>
                    </div>
                    <div className="detail-article-likeRight">
                        分享：
                        <span className="iconfont icon-weibo"></span>
                        <span className="iconfont icon-icon-weixin"></span>
                        <span className="iconfont icon-qq"></span>
                    </div>
                </div>
                <div className="detail-article-capther">
                    <div className="detail-article-capther-pre">
                        上一篇：面包还是甜甜圈
                    </div>
                    <div className="detail-article-capther-next">
                        下一篇：如若许诺，谁念
                    </div>
                </div>
            </div>
        )
    }
}