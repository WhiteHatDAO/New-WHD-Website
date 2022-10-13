import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import rexImage from "../assets/images/rex.svg";
import calendarImage from "../assets/images/calendar.svg";
import { FormatDate } from "../utils/utils";
import blank from "../assets/images/blank.png";

interface IProps {
  topics: any[];
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

    const getTextFromTopic = (index: number) => {
      const topic = this.props.topics[index].topic;
      let text = "";
      for (let i = 0; i < topic.length; i++) {
        if (topic[i].type === "paragaph") {
          for (let j = 0; j < topic[i].children.length; j++) {
            if(text.length > 50) return text;
            text += topic[i].children[j].text;
          }
        }
      }
      return text;
    };
  
    const getImageFromTopic = (index: number) => {
      const topic = this.props.topics[index].topic;
      let url = "";
      for (let i = 0; i < topic.length; i++) {
        if (topic[i].type === "image") {
          url = topic[i].url
          break;
        }
      }

      if(url.length === 0) {
        return blank;
      } else {
        return url;
      }
    }

    return (
      <div className="relative roadmap_container">
        <Slider {...settings}>
          {this.props?.topics.map((item: any, index: number) => (
            <div className="flex flex-col justify-center">
              <div className="my-8 mr-4 ml-4 shadow-sm flex flex-col border rounded-b-xl border-none">
                <img className="rounded-t-xl h-60" src={getImageFromTopic(index)} alt="post1"></img>
                <div className="p-4 flex flex-col space-y-4">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center space-x-2">
                      <img src={rexImage} alt="rex"></img>
                      <div className="font-light text-sz14 text-darkgray">
                        {item.author}.
                      </div>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                      <img src={calendarImage} alt="calendar"></img>
                      <div className="font-light text-sz14 text-darkgray">
                        {FormatDate(item.createdAt)}
                      </div>
                    </div>
                  </div>
                  <div className="text-black text-sz18 font-bold">
                    {item.title}
                  </div>
                  <div className="text-darkgray text-sz16 font-light">
                    {getTextFromTopic(index)}
                  </div>
                  <div onClick={() => {
                    this.props.handleGotoTopic(item);                    
                  }} className="cursor-pointer px-4 py-2 w-1/2 rounded-lg border border-blue shadow-sm text-sz18 font-light flex flex-col items-center">
                    Learn More
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
