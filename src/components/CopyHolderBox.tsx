import { useState, useEffect } from "react";
import copy from "../assets/images/copy_black.svg";
import check from "../assets/images/rating/check.png";

interface Props {
  value: any;
}

const CopyHolderBox = ({ value }: Props) => {
  const [copyStatus, setCopyStatus] = useState<boolean>(false);

  const handleCopyText = () => {
    navigator.clipboard.writeText(value);
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
    <div className="flex items-center space-x-3">
      <span>{value.slice(0, 4)+"..."+value.slice(value.length-4, value.length)}</span>
      {copyStatus ? (
        <img className="w-3" src={check} alt="check"></img>
      ) : (
        <img onClick={handleCopyText} src={copy} alt="copy" className="w-3 cursor-pointer"></img>
      )}
    </div>
  );
};

export default CopyHolderBox;
