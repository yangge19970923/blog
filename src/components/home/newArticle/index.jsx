import React, {Component} from "react"

import "./index.less"

import imgBg from "../../../assets/img/homeBg1.jpg"
import imgBg2 from "../../../assets/img/home-newArticle-bg.png"

function ArticleList(props) {
    return (
        <div className="home-newArticle-content-item" >
            <h2 className="home-newArticle-content">
                剪影流殇，光影华年
            </h2>
            <p className="home-newArticle-content-introduction">
                染指流沙，回绕不尽的世界繁华；青灯孤伴，镌刻不完的午夜落花；
                锦帛残卷，撰写不到的城南旧事；蓦然回首，消逝不见的绝美年华。[...]
            </p>
            <div className="home-newArticle-content-img">
                <div className="home-newArticle-content-img-list">
                    <img className="round" src={imgBg} alt=""/>
                </div>
                <div className="home-newArticle-content-img-list">
                    <img className="round" src={imgBg} alt=""/>
                </div>
                <div className="home-newArticle-content-img-list">
                    <img className="round" src={imgBg} alt=""/>
                </div>
            </div>
            <p className="home-newArticle-content-class">
                旅行日记&nbsp;&nbsp;&nbsp;2020-01-20
            </p>
        </div>
    )
}

export default class newArticle extends Component {
    render() {
        let i = [1,2,3];
        return (
            <div className="home-newArticle">
                <div className="home-newArticle-title">
                    <span>最新文章</span>
                </div>
                <div className="home-newArticle-content">
                    {
                        i.map((item, index) => {
                            return <ArticleList key={index} data={item}/>
                        })
                    }
                </div>
                
                <div className="home-newArticle-bg">
                    <img className="round" src={imgBg2} alt=""/>
                </div>
            </div>
        )
    }
}