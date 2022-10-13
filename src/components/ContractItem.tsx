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
import zksink from "../assets/images/select/zkSink.png";
import copy from "../assets/images/copy_black.svg";
import { getSubAddress } from "../utils/utils";

import { useState, useEffect } from "react";

interface itemProps {
  item: any;
  handleNetwork: (network: any) => void;
}

const ContractItem = ({ item, handleNetwork }: itemProps) => {
  const [copyStatus, setCopyStatus] = useState<boolean>(false);

  const handleCopyText = () => {
    navigator.clipboard.writeText(item.address);
    setCopyStatus(true);
  };

  useEffect(() => {
    if (!copyStatus) return;
    const timer = setTimeout(() => {
      setCopyStatus(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copyStatus]);

  return (
    <>
      <div
        onClick={() => handleNetwork(item)}
        className="bg-gray p-2 flex flex-row items-center space-x-2 justify-between"
      >
        {item.network === "ethereum" ? (
          <img className="w-8 h-8" src={ethereum} alt="ethereum"></img>
        ) : item.network === "binance" ? (
          <img className="w-8 h-8" src={binance} alt="binance"></img>
        ) : item.network === "arbitrum" ? (
          <img className="w-8 h-8" src={arbitrum} alt="arbitrum"></img>
        ) : item.network === "polygon" ? (
          <img className="w-8 h-8" src={polygon} alt="polygon"></img>
        ) : item.network === "optimism" ? (
          <img className="w-8 h-8" src={optimism} alt="optimism"></img>
        ) : item.network === "gnosis" ? (
          <img className="w-8 h-8" src={gnosis} alt="gnosis"></img>
        ) : item.network === "avalanche" ? (
          <img className="w-8 h-8" src={avalanche} alt="avalanche"></img>
        ) : item.network === "fantom" ? (
          <img className="w-8 h-8" src={fantom} alt="fantom"></img>
        ) : item.network === "klaytn" ? (
          <img className="w-8 h-8" src={klaytn} alt="klaytn"></img>
        ) : item.network === "aurora" ? (
          <img className="w-8 h-8" src={aurora} alt="aurora"></img>
        ) : item.network === "zkSink" ? (
          <img className="w-8 h-8" src={zksink} alt="zksink"></img>
        ) : (
          ""
        )}
        <div className="text-sz18 text-blue">{getSubAddress(item.address)}</div>
        {copyStatus ? (
          <img className="w-4" src={check} alt="check"></img>
        ) : (
          <img onClick={handleCopyText} src={copy} alt="copy"></img>
        )}
      </div>
    </>
  );
};

export default ContractItem;