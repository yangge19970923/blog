import React, {Component} from "react"

import "./index.less"

export default class Presentation extends Component {
    render() {
        return (
            <div className="home-presentation">
                <div className="home-presentation-title">
                    <span>提示</span>
                </div>
                <div className="home-presentation-content">
                    <div className="home-presentation-content-item round">
                        博客上线啦！
                        <span className="iconfont icon-cuowu"></span>
                    </div>
                </div>
            </div>
        )
    }
}