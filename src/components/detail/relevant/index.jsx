import React, {Component} from "react"

import "./index.less"

export default class Relevant extends Component {
    state = {
        articleList:[]
    };

    componentDidMount() {
        this.setState({
            articleList:[
                {
                    id: 1,
                    imgUrl:'homeBg2.jpg',
                    text:'剪影流殇，光影华年'
                },
                {
                    id: 2,
                    imgUrl:'homeBg2.jpg',
                    text:'剪影流殇，光影华年'
                },
                {
                    id: 3,
                    imgUrl:'homeBg2.jpg',
                    text:'剪影流殇，光影华年'
                },
                {
                    id: 4,
                    imgUrl:'homeBg2.jpg',
                    text:'剪影流殇，光影华年'
                },
            ]
        });
    }
    render() {
        return (
            <div className="detail-relevant round">
                <div className="detail-relevant-title">
                    相关阅读
                </div>
                <div className="detail-relevant-content">
                    {
                        this.state.articleList.map(item => (
                            <div className="detail-relevant-content-item" key={item.id}>
                                <img className="round" src={require("../../../assets/img/" + item.imgUrl).default} alt=""/>
                                <p>{item.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}