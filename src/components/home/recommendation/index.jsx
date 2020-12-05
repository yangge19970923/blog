import React, {Component} from "react"

import "./index.less"

import recommendation1 from "../../../assets/img/recommendation1.jpg"
import recommendation2 from "../../../assets/img/recommendation2.jpg"
import recommendation3 from "../../../assets/img/recommendation3.jpg"
import recommendation4 from "../../../assets/img/recommendation4.jpg"

export default class Recommendation extends Component {
    render() {
        return (
            <div className="home-recommendation">
                <div className="home-recommendation-title">
                    <span>推荐板块</span>
                </div>
                <div className="home-recommendation-content">
                    <div className="home-recommendation-content-item">
                        <div className="home-recommendation-content-itemImg round" style={{backgroundImage: `url(${recommendation1})`}}></div>
                        <p>心情随笔</p>
                    </div>
                    <div className="home-recommendation-content-item">
                        <div className="home-recommendation-content-itemImg round" style={{ backgroundImage:`url(${recommendation2})`}} alt=""></div>
                        <p>工作笔记</p>
                    </div>
                    <div className="home-recommendation-content-item">
                        <div className="home-recommendation-content-itemImg round" style={{ backgroundImage:`url(${recommendation3})`}} alt=""></div>
                        <p>胡吃海塞</p>
                    </div>
                    <div className="home-recommendation-content-item">
                        <div className="home-recommendation-content-itemImg round" style={{ backgroundImage:`url(${recommendation4})`}} alt=""></div>
                        <p>旅行日记</p>
                    </div>
                </div>
            </div>
        )
    }
}