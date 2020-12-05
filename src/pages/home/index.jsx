import React, {Component} from "react"
import RightNav from '../../components/right-nav'

import './index.less'

import ImgRec from "../../components/home/img-rec"
import NewArticle from "../../components/home/newArticle"
import Itinerary from "../../components/home/itinerary"
import Recommendation from "../../components/home/recommendation"
import Presentation from "../../components/home/presentation"

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="home-center">
                    <div className="home-content round">
                        <ImgRec />
                        <NewArticle />
                        <Itinerary />
                        <Recommendation />
                        <Presentation />
                    </div>
                </div>
                <RightNav></RightNav>
            </div>
        )
    }
}