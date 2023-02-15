import { useState, useEffect } from "react";
import copy from "../assets/images/copy_black.svg";
import check from "../assets/images/rating/check.png";

interface Props {
  reviewed: any;
}

const CopyReviewBox = ({ reviewed }: Props) => {
  const [copyStatus, setCopyStatus] = useState<boolean>(false);

  const handleCopyText = () => {
    navigator.clipboard.writeText(reviewed);
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
    <div className="w-full rounded-md shadow-sm flex flex-row overflow-hidden">
      <div className="p-2 rounded-l-md bg-gray flex flex-col items-center justify-center">
        {copyStatus ? (
          <img className="min-w-[18px] w-4" src={check} alt="check"></img>
        ) : (
          <img onClick={handleCopyText} src={copy} alt="copy" className="min-w-[18px] min-h-[22px]"></img>
        )}
      </div>
      <div className="p-2 flex flex-row items-center space-x-2 overflow-hidden xl:max-w-[80px]">
        <div className="text-sz16 text-blue font-Manrope font-bold xl:font-semibold truncate">{reviewed}</div>
      </div>
    </div>
  );
};

export default CopyReviewBox;
