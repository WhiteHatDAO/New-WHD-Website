import { useState, useEffect } from "react";
import nftEarth from "../assets/images/select/nftEarth.png";
import opensea from "../assets/images/select/opensea.png";
import rarible from "../assets/images/select/rarible.png";

const platforms = [
  {
    name: 'nftEarth',
    image: nftEarth,
    link: "https://nftearth.exchange/"
  },
  // {
  //   name: 'uniswap',
  //   image: uniswap,
  //   link: "https://uniswap.org/"
  // },
  // {
  //   name: 'opensea',
  //   image: opensea,
  //   link: "https://opensea.io/"
  // },
  // {
  //   name: 'rarible',
  //   image: rarible,
  //   link: "https://rarible.com/"
  // },
];

interface selectPlatformProps {
  index: number;
  value: any;
  handlePlatformChange: (platform: string, index: number) => void;
}

const SelectPlatform = ({
  index,
  value,
  handlePlatformChange,
}: selectPlatformProps) => {
  const [show, setShow] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<any>();

  useEffect(() => {
    if (value) {
      let item = platforms.find((e) => e.name === value.platform);
      if (item) {
        setSelectedPlatform(item);
      } else {
        setSelectedPlatform(platforms[0]);
      }
    } else {
      setSelectedPlatform(platforms[0])
    }
  }, [value]);

  const handleSelectPlatform = (platform: any) => {
    setSelectedPlatform(platform);
    handlePlatformChange(platform.name, index);
    setShow(false);
  };
  return (
    <>
      {selectedPlatform && (
        <div className="relative">
          <button
            className="w-40 bg-gray focus:outline-none focus:ring-2 focus:ring-offset-2 px-4 py-2 shadow-sm rounded-lg border border-blue text-sm font-medium leading-none flex flex-row items-center justify-between space-x-2 cursor-pointer"
            onClick={() => setShow(!show)}
          >
            <img
              className="w-6 h-6 object-cover"
              src={selectedPlatform.image}
              alt="platform"
            ></img>
            <div>{selectedPlatform.name}</div>
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
              className="z-10 w-40 border border-blue mt-2 absolute bg-lightgray rounded-sm cursor-pointer"
              id="dropdown"
            >
              {platforms.map((platform: any) => (
                <div
                  onClick={() => handleSelectPlatform(platform)}
                  className="hover:bg-darkgray rounded-sm flex flex-row items-center px-4 py-2"
                >
                  <img className="w-6 h-6" src={platform.image} alt="aaa"></img>
                  <p className="focus:outline-none text-sm leading-normal ml-2 text-gray-800">
                    {platform.name}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SelectPlatform;
