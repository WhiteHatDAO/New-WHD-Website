import copy from "../assets/images/copy_black.svg";
import check from "../assets/images/rating/check.png";
import { useState, useEffect } from "react";

interface shaProps {
  sha: string;
}

const ShaComponent = ({ sha }: shaProps) => {
  const [copyStatus, setCopyStatus] = useState<boolean>(false);

  const handleCopyText = () => {
    navigator.clipboard.writeText(sha);
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
    <div className="flex flex-row items-center space-x-2">
      <div>{sha}</div>
      {copyStatus ? (
        <img className="w-4" src={check} alt="check"></img>
      ) : (
        <img onClick={handleCopyText} src={copy} alt="copy"></img>
      )}
    </div>
  );
};

export default ShaComponent;
