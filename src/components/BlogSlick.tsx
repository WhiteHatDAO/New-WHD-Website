import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

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

    const datePublished = (_data: any) => {
      const data = _data.slice(0, 4)+"-"+_data.slice(4, 6)+"-"+_data.slice(6, 8)+"T"+_data.slice(9, 11)+":"+_data.slice(11, 13)+":"+_data.slice(13, 15)
      const _tmp = new Date(data);
      return _tmp.getDate()+" "+monthNames[_tmp.getMonth()]+" "+_tmp.getFullYear();
    }

    return (
      <div className="relative roadmap_container">
        <Slider {...settings}>
          {this.props?.news.map((item: any, index: number) => (
            <a key={index} href={item.url} target="_blank" rel="noreferrer">
              <div className="flex flex-col justify-center cursor-pointer">
                <div className="my-8 mr-4 ml-4 shadow-sm flex flex-col border rounded-b-xl border-none overflow-hidden">
                  <img className="rounded-t-xl h-60 object-cover" src={item.banner_image} alt="post1"></img>
                  <div className="p-4 flex flex-col space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="truncate font-light text-sz14">{item.source_domain}</div>
                      <div className="truncate font-light text-sz14 text-darkgray">
                        {datePublished(item.time_published)}
                        {/* {getPast(item.time_published).days > 0 && getPast(item.time_published).days + "d "}
                        {getPast(item.time_published).hours > 0 && getPast(item.time_published).hours + "h "}
                        {getPast(item.time_published).minutes > 0 && getPast(item.time_published).minutes + "m "}*/}
                      </div>
                    </div>
                    <div className="text-black text-sz16 font-bold limit-oneline">
                      {item.title}
                    </div>
                    <div className="text-black text-sz14 limit-threelines">
                      {item.summary}
                    </div>
                    <div className="cursor-pointer shadow-sm rounded-md px-3 py-2 flex items-center justify-center self-start">
                      Learn More
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
