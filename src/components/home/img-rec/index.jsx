import React, {Component} from "react"
import './index.less'

import bgImg1 from "../../../assets/img/homeBg1.jpg"
import bgImg2 from "../../../assets/img/homeBg2.jpg"
import bgImg3 from "../../../assets/img/homeBg3.jpg"

export default class imgRec extends Component {
    render() {
        return (
            <div className="home-imgRec">
                <div className="home-imgRec-content">
                    <div className="home-imgRec-left round blog-background-cover" style={{backgroundImage: `url(${bgImg1})`}}>
                        <div className="blog-overlay">
                            <h1>剪影流殇，光影华年</h1>
                            <p>染指流沙，回绕不尽的世界繁华；
                            青灯孤伴，镌刻不完的午夜落花；
                            锦帛残卷，撰写不到的城南旧事；
                            蓦然...</p>
                        </div>
                    </div>
                    <div className="home-imgRec-right">
                        <div className="first round blog-background-cover" style={{backgroundImage: `url(${bgImg2})`}}>
                            <div className="blog-overlay">
                                <h1>剪影流殇，光影华年</h1>
                            </div>
                        </div>
                        <div className="second round blog-background-cover"  style={{backgroundImage: `url(${bgImg3})`}}>
                            <div className="blog-overlay">
                                <h1>如许相诺，谁念</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}