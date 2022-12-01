import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { getPast } from "../utils/utils";

interface IProps {
  news: any[];
  handleGotoTopic: (prof: any) => void;
}

export default class ReactSlick extends Component<IProps> {  
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      draggable: true,
      accessibility: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="relative roadmap_container">
        <Slider {...settings}>
          {this.props?.news.map((item: any, index: number) => (
            <a href={"https://coindesk.com/" + item.url}>
              <div key={index} className="flex flex-col justify-center cursor-pointer">
                <div className="my-8 mr-4 ml-4 shadow-sm flex flex-col border rounded-b-xl border-none overflow-hidden">
                  <img className="rounded-t-xl h-60 blur" src={item.author.image.desktop.src} alt="post1"></img>
                  <div className="p-4 flex flex-col space-y-4">
                    <div className="text-black text-sz18 font-bold overflow-hidden" style={{height: 150}}>
                      {item.title}
                    </div>
                    <div className="flex flex-row flex-wrap items-center gap-x-2">
                      <div className="w-1 h-4 bg-major"></div>
                      <span>www.coindesk.com</span>
                      <div className="font-light text-sz14 text-darkgray">
                        {getPast(item.date).days > 0 && getPast(item.date).days + "d "}
                        {getPast(item.date).hours > 0 && getPast(item.date).hours + "h "}
                        {getPast(item.date).minutes > 0 && getPast(item.date).minutes + "m "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </Slider>
      </div>
    );
  }
}
