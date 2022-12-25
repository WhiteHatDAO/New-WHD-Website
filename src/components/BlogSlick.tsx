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
            <a key={index} href={item.url}>
              <div className="flex flex-col justify-center cursor-pointer">
                <div className="my-8 mr-4 ml-4 shadow-sm flex flex-col border rounded-b-xl border-none overflow-hidden">
                  <img className="rounded-t-xl h-60 object-cover" src={item.banner_image} alt="post1"></img>
                  <div className="p-4 flex flex-col space-y-4">
                    <div className="text-black text-sz14 font-bold overflow-hidden" style={{height: 150}}>
                      {item.title.length>50 ? item.title.slice(0, 100)+" ..." : item.title}
                    </div>
                    <div className="flex flex-row flex-wrap items-center gap-x-2">
                      <div className="w-1 h-4 bg-major"></div>
                      <span className="text-sz14">{item.source_domain}</span><br/>
                      <div className="font-light text-sz14 text-darkgray">
                        {getPast(item.time_published).days > 0 && getPast(item.time_published).days + "d "}
                        {getPast(item.time_published).hours > 0 && getPast(item.time_published).hours + "h "}
                        {getPast(item.time_published).minutes > 0 && getPast(item.time_published).minutes + "m "}
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
