import { useState, useEffect } from "react";
import { SECURITY_COLOR } from "../utils/types";

interface selectBoxProps {
  type: boolean;
  index: number;
  color: string;
  handleColor: (index: number, color: string) => void;
}

const SelectBox = ({ type, index, color, handleColor }: selectBoxProps) => {
  const [show, setShow] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>();

  useEffect(() => {
    if (color !== undefined ) {
      setSelectedColor(color);
    } else {
      if(type === false) {
        setSelectedColor(SECURITY_COLOR.PURPLE)
      }
    }
  }, [color, type]);

  const handleSwitchColor = (arg: string) => {
    setSelectedColor(arg);
    handleColor(index, arg);
    setShow(false);
  };

  const getStyleForSelect = () => {
    let styleSelect = "";
    switch (selectedColor) {
      case SECURITY_COLOR.CRITICAL: {
        styleSelect = "w-6 h-6 rounded-full bg-critical";
        break;
      }
      case SECURITY_COLOR.MAJOR: {
        styleSelect = "w-6 h-6 rounded-full bg-major";
        break;
      }
      case SECURITY_COLOR.MAGENTA: {
        styleSelect = "w-6 h-6 rounded-full bg-magenta";
        break;
      }
      case SECURITY_COLOR.DAISY: {
        styleSelect = "w-6 h-6 rounded-full bg-daisy";
        break;
      }
      case SECURITY_COLOR.LIGHTRED: {
        styleSelect = "w-6 h-6 rounded-full bg-lightred";
        break;
      }
      case SECURITY_COLOR.MEDIUM: {
        styleSelect = "w-6 h-6 rounded-full bg-medium";
        break;
      }
      case SECURITY_COLOR.MINOR: {
        styleSelect = "w-6 h-6 rounded-full bg-minor";
        break;
      }
      case SECURITY_COLOR.INFORMATIONAL: {
        styleSelect = "w-6 h-6 rounded-full bg-informational";
        break;
      }
      case SECURITY_COLOR.PURPLE: {
        styleSelect = "w-6 h-6 rounded-full bg-pure_purple";
        break;
      }
      case SECURITY_COLOR.GREEN: {
        styleSelect = "w-6 h-6 rounded-full bg-pure_green";
        break;
      }
      case SECURITY_COLOR.SKYBLUE: {
        styleSelect = "w-6 h-6 rounded-full bg-pure_blue";
        break;
      }
      case SECURITY_COLOR.PINK: {
        styleSelect = "w-6 h-6 rounded-full bg-pink";
        break;
      }
      case SECURITY_COLOR.ORANGE: {
        styleSelect = "w-6 h-6 rounded-full bg-pure_orange";
        break;
      }
    }

    return styleSelect;
  };

  return (
    <div className="relative">
      <button
        className="focus:outline-none focus:ring-2 focus:ring-offset-2 px-4 py-2 shadow-sm rounded-lg border border-blue text-sm font-medium leading-none flex flex-row items-center space-x-2 cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <div className={getStyleForSelect()}></div>
        <div>{selectedColor}</div>
        <div>
          {show ? (
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.00016 0.666664L9.66683 5.33333L0.333496 5.33333L5.00016 0.666664Z"
                fill="#1F2937"
              />
            </svg>
          ) : (
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.00016 5.33333L0.333496 0.666664H9.66683L5.00016 5.33333Z"
                fill="#1F2937"
              />
            </svg>
          )}
        </div>
      </button>
      {show && (
        <div
          className="z-10 border border-blue mt-2 absolute bg-lightgray rounded-sm cursor-pointer"
          id="dropdown"
        >
          {type ? (
            <>
              <div
                onClick={() => handleSwitchColor("Critical")}
                className="hover:bg-darkgray rounded-sm flex flex-row items-center px-4 py-2"
              >
                <div className="w-6 h-6 bg-critical rounded-full"></div>
                <p className="focus:outline-none text-sm leading-normal ml-2 text-gray-800">
                  Critical
                </p>
              </div>
              <div
                onClick={() => handleSwitchColor("Major")}
                className="hover:bg-darkgray rounded-sm flex flex-row items-center px-4 py-2"
              >
                <div className="w-6 h-6 bg-major rounded-full"></div>
                <p className="focus:outline-none text-sm leading-normal ml-2 text-gray-800">
                  Major
                </p>
              </div>
              <div
                onClick={() => handleSwitchColor("Medium")}
                className="hover:bg-darkgray rounded-sm flex flex-row items-center px-4 py-2"
              >
                <div className="w-6 h-6 bg-medium rounded-full"></div>
                <p className="focus:outline-none text-sm leading-normal ml-2 text-gray-800">
                  Medium
                </p>
              </div>
              <div
                onClick={() => handleSwitchColor("Minor")}
                className="hover:bg-darkgray rounded-sm flex flex-row items-center px-4 py-2"
              >
                <div className="w-6 h-6 bg-minor rounded-full"></div>
                <p className="focus:outline-none text-sm leading-normal ml-2 text-gray-800">
                  Minor
                </p>
              </div>
              <div
                onClick={() => handleSwitchColor("Informational")}
                className="hover:bg-darkgray rounded-sm flex flex-row items-center px-4 py-2"
              >
                <div className="w-6 h-6 bg-informational rounded-full"></div>
                <p className="focus:outline-none text-sm leading-normal ml-2 text-gray-800">
                  Informational
                </p>
              </div>
            </>
          ) : (
            <>
              <div
                onClick={() => handleSwitchColor("Purple")}
                className="hover:bg-darkgray rounded-sm flex flex-row items-center px-4 py-2"
              >
                <div className="w-6 h-6 bg-pure_purple rounded-full"></div>
                <p className="focus:outline-none text-sm leading-normal ml-2 text-gray-800">
                  Purple
                </p>
              </div>
              <div
                onClick={() => handleSwitchColor("Green")}
                className="hover:bg-darkgray rounded-sm flex flex-row items-center px-4 py-2"
              >
                <div className="w-6 h-6 bg-pure_green rounded-full"></div>
                <p className="focus:outline-none text-sm leading-normal ml-2 text-gray-800">
                  Green
                </p>
              </div>
              <div
                onClick={() => handleSwitchColor("Orange")}
                className="hover:bg-darkgray rounded-sm flex flex-row items-center px-4 py-2"
              >
                <div className="w-6 h-6 bg-pure_orange rounded-full"></div>
                <p className="focus:outline-none text-sm leading-normal ml-2 text-gray-800">
                  Orange
                </p>
              </div>
              <div
                onClick={() => handleSwitchColor("Skyblue")}
                className="hover:bg-darkgray rounded-sm flex flex-row items-center px-4 py-2"
              >
                <div className="w-6 h-6 bg-pure_blue rounded-full"></div>
                <p className="focus:outline-none text-sm leading-normal ml-2 text-gray-800">
                  Skyblue
                </p>
              </div>
              <div
                onClick={() => handleSwitchColor("Pink")}
                className="hover:bg-darkgray rounded-sm flex flex-row items-center px-4 py-2"
              >
                <div className="w-6 h-6 bg-pink rounded-full"></div>
                <p className="focus:outline-none text-sm leading-normal ml-2 text-gray-800">
                  Pink
                </p>
              </div>
              <div
                onClick={() => handleSwitchColor("Lightred")}
                className="hover:bg-darkgray rounded-sm flex flex-row items-center px-4 py-2"
              >
                <div className="w-6 h-6 bg-lightred rounded-full"></div>
                <p className="focus:outline-none text-sm leading-normal ml-2 text-gray-800">
                  Lightred
                </p>
              </div>
              <div
                onClick={() => handleSwitchColor("Magenta")}
                className="hover:bg-darkgray rounded-sm flex flex-row items-center px-4 py-2"
              >
                <div className="w-6 h-6 bg-magenta rounded-full"></div>
                <p className="focus:outline-none text-sm leading-normal ml-2 text-gray-800">
                Magenta
                </p>
              </div>
              <div
                onClick={() => handleSwitchColor("Daisy")}
                className="hover:bg-darkgray rounded-sm flex flex-row items-center px-4 py-2"
              >
                <div className="w-6 h-6 bg-daisy rounded-full"></div>
                <p className="focus:outline-none text-sm leading-normal ml-2 text-gray-800">
                  Daisy
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SelectBox;
