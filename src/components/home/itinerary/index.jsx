import React, {Component} from "react"
import { Carousel, WingBlank } from 'antd-mobile';

import './index.less'

import bgImg1 from "../../../assets/img/homeBg1.jpg"

class SliDer extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
          dots={false}
          autoplayInterval={3000}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <div className="home-itinerary-slider-img">
                  <div className="home-itinerary-slider-img-item">
                      <img className="round" src={bgImg1} alt=""/>
                      <p>我想走遍世界每一个角落</p>
                  </div>
                  <div className="home-itinerary-slider-img-item">
                      <img className="round" src={bgImg1} alt=""/>
                      <p>我想走遍世界每一个角落</p>
                  </div>
                  <div className="home-itinerary-slider-img-item">
                      <img className="round" src={bgImg1} alt=""/>
                      <p>我想走遍世界每一个角落</p>
                  </div>
                  <div className="home-itinerary-slider-img-item">
                      <img className="round" src={bgImg1} alt=""/>
                      <p>我想走遍世界每一个角落</p>
                  </div>
              </div>
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}

export default class Itinerary extends Component{
    render() {
        return (
            <div className="home-itinerary">
                <div className="home-itinerary-title">
                    <span>旅行日记</span>
                </div>
                <SliDer />
            </div>
        )
    }
}