import React, {Component} from "react"
import RightNav from "../../components/right-nav"

import Article from "../../components/detail/article"
import Relevant from "../../components/detail/relevant"
import Comment from "../../components/detail/comment"

import "./index.less"

export default class Detail extends Component {
    render () {
        return (
            <div className="detail">
                <div className="detail-center">
                    <div className="detail-content round">
                        <Article />
                        <Relevant />
                        <Comment />
                    </div>
                </div>
                <RightNav></RightNav>
            </div>
        )
    }
}