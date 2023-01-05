import copy from "../assets/images/copy_black.svg";
import { getSubAddress } from "../utils/utils";
import { useState, useEffect } from "react";
import ethereum from "../assets/images/select/ethereum.svg";
import arbitrum from "../assets/images/select/arbitrum.svg";
import binance from "../assets/images/select/binance.svg";
import polygon from "../assets/images/select/polygon.svg";
import check from "../assets/images/rating/check.png";
import optimism from "../assets/images/select/optimism.png";
import gnosis from "../assets/images/select/gnosis.png";
import avalanche from "../assets/images/select/avalanche.png";
import fantom from "../assets/images/select/fantom.png";
import klaytn from "../assets/images/select/klaytn.png";
import aurora from "../assets/images/select/aurora.png";
import zksync from "../assets/images/select/zkSync.png";
import ContractItem from "./ContractItem";

interface boxInterface {
  data: any;
}

const ContractAddressBox = ({ data }: boxInterface) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [addrArray, setAddrArray] = useState<any[]>([]);
  const [network, setNetwork] = useState<any>();
  const [copyStatus, setCopyStatus] = useState<boolean>(false)

  const handleCopyText = () => {
    navigator.clipboard.writeText(network.address)
    setCopyStatus(true);
  }

  const handleNetwork = (net: any) => {
    setNetwork(net)
  }

  useEffect(() => {
    if(!copyStatus)return;
    const timer = setTimeout(() => {
      setCopyStatus(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copyStatus]);

  useEffect(() => {
    if (!data) return;

    setAddrArray(data);
  }, [data]);

  useEffect(() => {
    setNetwork(addrArray[0]);
  }, [addrArray]);
  return (
    <>
      {network && (
        <div className="relative w-64 rounded-md shadow-sm flex flex-row">
          <div className="p-2 w-full flex flex-row items-center space-x-2">
            {
              copyStatus ? (
                <img className="w-4" src={check} alt="check"></img>
              ) : (
                <img onClick={handleCopyText} src={copy} alt="copy"></img>
              )
            }
            {network.network === "ethereum" ? (
              <img className="w-5 h-5" src={ethereum} alt="ethereum"></img>
            ) : network.network === "arbitrum" ? (
              <img className="w-5 h-5" src={arbitrum} alt="arbitrum"></img>
            ) : network.network === "binance" ? (
              <img className="w-5 h-5" src={binance} alt="binance"></img>
            ) : network.network === "polygon" ? (
              <img className="w-5 h-5" src={polygon} alt="polygon"></img>
            ) : network.network === "optimism" ? (
              <img className="w-5 h-5" src={optimism} alt="optimism"></img>
            ) : network.network === "gnosis" ? (
              <img className="w-5 h-5" src={gnosis} alt="gnosis"></img>
            ) : network.network === "avalanche" ? (
              <img className="w-5 h-5" src={avalanche} alt="avalanche"></img>
            ) : network.network === "fantom" ? (
              <img className="w-5 h-5" src={fantom} alt="fantom"></img>
            ) : network.network === "klaytn" ? (
              <img className="w-5 h-5" src={klaytn} alt="klaytn"></img>
            ) : network.network === "aurora" ? (
              <img className="w-5 h-5" src={aurora} alt="aurora"></img>
            ) : network.network === "zkSync" ? (
              <img className="w-5 h-5" src={zksync} alt="zkSync"></img>
            ) : (
              ""
            )}
            {data && (
              <div className="text-blue">
                {getSubAddress(network.address as string)}
              </div>
            )}
          </div>
          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="p-2 bg-blue rounded-r-md flex items-center justify-center"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 21H24.5V18.6667H3.5V21ZM3.5 15.1667H24.5V12.8333H3.5V15.1667ZM3.5 7V9.33333H24.5V7H3.5Z"
                fill="white"
              />
            </svg>
          </div>
          {showDropdown && (
            <div
              className="absolute rounded-md border bg-lightgray text-sz16 text-blue border-blue shadow-sm w-64"
              style={{ top: "60px", right: "0px" }}
            >
              <div className="flex flex-col p-2 gap-4">
                {addrArray.map((addr: any) => (
                  <ContractItem item={addr} handleNetwork={handleNetwork}></ContractItem>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ContractAddressBox;
