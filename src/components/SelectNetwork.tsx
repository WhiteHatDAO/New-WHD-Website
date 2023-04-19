import { useState, useEffect } from "react";
import ethereum from "../assets/images/select/ethereum.svg";
import arbitrum from "../assets/images/select/arbitrum.svg";
import binance from "../assets/images/select/binance.svg";
import polygon from "../assets/images/select/polygon.svg";
import optimism from "../assets/images/select/optimism.png";
import gnosis from "../assets/images/select/gnosis.png";
import avalanche from "../assets/images/select/avalanche.png";
import fantom from "../assets/images/select/fantom.png";
import klaytn from "../assets/images/select/klaytn.png";
import aurora from "../assets/images/select/aurora.png";
import zksync from "../assets/images/select/zkSync.png";
import harmony from "../assets/images/select/harmony-2.png";
import canto from "../assets/images/select/canto.webp";

const networks = [
  {
    name: 'ethereum',
    id: 'eth-mainnet',
    image: ethereum,
  },
  {
    name: 'binance',
    id: 'bsc-mainnet',
    image: binance,
  },
  {
    name: 'polygon',
    id: 'matic-mainnet',
    image: polygon,
  },
  {
    name: 'optimism',
    id: 'optimism-mainnet',
    image: optimism,
  },
  {
    name: 'arbitrum',
    id: 'arbitrum-mainnet',
    image: arbitrum,
  },
  {
    name: 'gnosis',
    id: 'gnosis-mainnet',
    image: gnosis,
  },
  {
    name: 'avalanche',
    id: 'avalanche-mainnet',
    image: avalanche,
  },
  {
    name: 'fantom',
    id: 'fantom-mainnet',
    image: fantom,
  },
  {
    name: 'klaytn',
    id: 'klaytn-mainnet',
    image: klaytn,
  },
  {
    name: 'aurora',
    id: 'aurora-mainnet',
    image: aurora,
  },
  {
    name: 'zkSync',
    id: 'zkSync-mainnet',
    image: zksync,
  },
  {
    name: 'harmony',
    id: 'harmony-mainnet',
    image: harmony,
  },
  {
    name: "canto",
    id: 'canto-mainnet',
    image: canto,
  },
];

interface selectNetworkProps {
  index: number;
  value: any;
  handleNetworkChange: (network: string, index: number) => void;
}

const SelectNetwork = ({
  index,
  value,
  handleNetworkChange,
}: selectNetworkProps) => {
  const [show, setShow] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState<any>();

  useEffect(() => {
    if (value) {
      let item = networks.find((e) => e.name === value.network);
      if (item) {
        setSelectedNetwork(item);
      } else {
        setSelectedNetwork(networks[0]);
      }
    } else {
      setSelectedNetwork(networks[0])
    }
  }, [value]);

  const handleSelectNetwork = (network: any) => {
    setSelectedNetwork(network);
    handleNetworkChange(network.name, index);
    setShow(false);
  };
  return (
    <>
      {selectedNetwork && (
        <div className="relative">
          <button
            className="w-40 bg-gray focus:outline-none focus:ring-2 focus:ring-offset-2 px-4 py-2 shadow-sm rounded-lg border border-blue text-sm font-medium leading-none flex flex-row items-center justify-between space-x-2 cursor-pointer"
            onClick={() => setShow(!show)}
          >
            <img
              className="w-6 h-6"
              src={selectedNetwork.image}
              alt="network"
            ></img>
            <div>{selectedNetwork.name}</div>
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
              {networks.map((network: any) => (
                <div
                  onClick={() => handleSelectNetwork(network)}
                  className="hover:bg-darkgray rounded-sm flex flex-row items-center px-4 py-2"
                >
                  <img className="w-6 h-6" src={network.image} alt="aaa"></img>
                  <p className="focus:outline-none text-sm leading-normal ml-2 text-gray-800">
                    {network.name}
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

export default SelectNetwork;
