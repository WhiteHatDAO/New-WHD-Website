import copy from "../assets/images/copy.svg";
import pattern from "../assets/images/pattern.svg";
import { getSubAddress } from "../utils/utils";

interface boxInterface {
  address: string;
}

const ContractAddressBox = ({ address }: boxInterface) => {
  console.log("address", address);
  return (
    <div className="rounded-md shadow-sm flex flex-row">
      <div className="p-2 w-full flex flex-row items-center">
        <img src={copy} alt="copy"></img>
        <img src={pattern} alt="pattern"></img>
        {address && (
          <div className="text-blue text-sz20">{getSubAddress(address)}</div>
        )}
      </div>
      <div className="p-2 bg-blue rounded-r-md flex items-center justify-center">
        <svg
          width="28"
          height="28"
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
    </div>
  );
};

export default ContractAddressBox;
