import React, {Component} from "react"
import RightNav from "../../components/right-nav"

import Info from "../../components/mine/info"
import Dynamic from "../../components/mine/dynamic"

import "./index.less"

export default class Detail extends Component {
    render () {
        return (
            <div className="detail">
                <div className="detail-center">
                    <div className="detail-content round">
                        <Info />
                        {/* <Dynamic /> */}
                    </div>
                </div>
                <RightNav></RightNav>
            </div>
        )
    }
}