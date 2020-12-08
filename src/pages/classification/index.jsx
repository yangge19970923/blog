import React, {Component} from "react"
import { Link } from "react-router-dom"
import RightNav from '../../components/right-nav'

import "./index.less"

import bgImg1 from "../../assets/img/homeBg1.jpg"

export default class Classification extends Component {
    state = {
        title:'',
        classList:[]
    }
    componentDidMount () {
        this.setState({
            title:'心情随笔',
            classList:[
                {
                    classId: 1,
                    classTitle:'剪影流殇，光影华年',
                    introduction: '染指流沙，回绕不尽的世界繁华； 青灯孤伴，镌刻不完的午夜落花； 锦帛残卷，撰写不到的城南旧事； 蓦然回首，消逝不见的绝美年华。[...]',
                    time: '2020-12-06'
                },
                {
                    classId: 2,
                    classTitle:'2020年初随笔',
                    introduction: '往事，我这个人比较喜欢念旧吧，人事物。不知不觉，2019年马上就要过去了， 年初你满怀信心给自己定下的目标实现了多少，又有多少你没有实现。你还和曾经的你一样么，变化了么。最近总是能有意无意的[...]',
                    time: '2020-12-06'
                },
                {
                    classId: 3,
                    classTitle:'剪影流殇，光影华年',
                    introduction: '染指流沙，回绕不尽的世界繁华； 青灯孤伴，镌刻不完的午夜落花； 锦帛残卷，撰写不到的城南旧事； 蓦然回首，消逝不见的绝美年华。[...]',
                    time: '2020-12-06'
                },
            ]
        }) 
    }
    render() {
        console.log(this.state.classList);
        return (
            <div className="classification">
                <div className="classification-center">
                    <div className="classification-content round">
                        <div className="classification-content-title">
                            {this.state.title}
                        </div>
                        <div className="classification-content-detail">
                            {
                                this.state.classList.map(item => (
                                     <div className="classification-content-detailItem" key={item.classId}>
                                         <Link to = "/detail">
                                            <h2 className="classification-content-detailItem-title">
                                                {item.classTitle}
                                            </h2>
                                            <div className="classification-content-detailItem-introduction">
                                                {item.introduction}
                                            </div>
                                            <div className="classification-content-detailItem-img">
                                                <div className="classification-content-detailItem-imgItem">
                                                    <img className="round" src={bgImg1} alt=""/>
                                                </div>
                                                <div className="classification-content-detailItem-imgItem">
                                                    <img className="round" src={bgImg1} alt=""/>
                                                </div>
                                                <div className="classification-content-detailItem-imgItem">
                                                    <img className="round" src={bgImg1} alt=""/>
                                                </div>
                                            </div>
                                            <p className="classification-content-detailItem-time">
                                            {this.state.title}&nbsp;&nbsp;{item.time}
                                            </p>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <RightNav></RightNav>
            </div>
        )
    }
}