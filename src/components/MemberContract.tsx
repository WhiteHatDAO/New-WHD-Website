import { useState, useEffect } from "react";
import copy from "../assets/images/copy_black.svg";
import check from "../assets/images/rating/check.png";
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
import zksink from "../assets/images/select/zkSink.png";

import { getSubAddress } from "../utils/utils"

interface memberProps {
  address: any;
}

const MemberContract = ({ address }: memberProps) => {
  const [copyStatus, setCopyStatus] = useState<boolean>(false);

  const handleCopyText = () => {
    navigator.clipboard.writeText(address.address);
    setCopyStatus(true);
  };

  useEffect(() => {
    console.log('address', address)
  }, [address])

  useEffect(() => {
    if (!copyStatus) return;
    const timer = setTimeout(() => {
      setCopyStatus(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copyStatus]);

  return (
    <div className="rounded-md shadow-sm flex flex-row">
      <div className="p-2 rounded-l-md bg-gray flex flex-col items-center justify-center">
        {copyStatus ? (
          <img className="w-4" src={check} alt="check"></img>
        ) : (
          <img onClick={handleCopyText} src={copy} alt="copy"></img>
        )}
      </div>
      <div className="p-2 flex flex-row items-center space-x-2">
        <div className="text-sz18 text-blue">{getSubAddress(address.address)}</div>
        {address.network === "ethereum" ? (
          <img className="w-6 h-6" src={ethereum} alt="ethereum"></img>
        ) : address.network === "arbitrum" ? (
          <img className="w-6 h-6" src={arbitrum} alt="arbitrum"></img>
        ) : address.network === "binance" ? (
          <img className="w-6 h-6" src={binance} alt="binance"></img>
        ) : address.network === "polygon" ? (
          <img className="w-6 h-6" src={polygon} alt="polygon"></img>
        ) : address.network === "optimism" ? (
          <img className="w-6 h-6" src={optimism} alt="optimism"></img>
        ) : address.network === "gnosis" ? (
          <img className="w-6 h-6" src={gnosis} alt="gnosis"></img>
        ) : address.network === "avalanche" ? (
          <img className="w-6 h-6" src={avalanche} alt="avalanche"></img>
        ) : address.network === "fantom" ? (
          <img className="w-6 h-6" src={fantom} alt="fantom"></img>
        ) : address.network === "klaytn" ? (
          <img className="w-6 h-6" src={klaytn} alt="klaytn"></img>
        ) : address.network === "aurora" ? (
          <img className="w-6 h-6" src={aurora} alt="aurora"></img>
        ) : address.network === "zkSink" ? (
          <img className="w-6 h-6" src={zksink} alt="zksink"></img>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MemberContract;
