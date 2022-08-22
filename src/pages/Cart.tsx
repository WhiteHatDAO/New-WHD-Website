import cart_logo from "../assets/images/shop/cart_logo.png";
import info from "../assets/images/shop/info.svg";
import edit from "../assets/images/shop/edit.png";
import uncheck from "../assets/images/shop/uncheck.png";
import check from "../assets/images/shop/check.png";
import whitehat from "../assets/images/shop/whitehat_medium.png";
import bitcoin from "../assets/images/shop/bitcoin.png";
import ethereum from "../assets/images/shop/ethereum.png";
import metamask from "../assets/images/shop/metamask.png";
import wallet from "../assets/images/shop/wallet.png";
import coinbase from "../assets/images/shop/coinbase.png";

const Cart = () => {
  return (
    <div className="mx-4 my-10 font-Manrope flex flex-row gap-8">
      <div className="w-1/2 flex flex-col space-y-8">
        <div className="p-6 rounded-xl shadow-xl border border-blue flex flex-col space-y-4">
          <div className="text-blue text-sz22">Order details</div>
          <div className="p-3 rounded-md bg-gray flex flex-row items-center space-x-4">
            <img src={cart_logo} alt="cart"></img>
            <div className="flex flex-col space-y-2">
              <div className="text-sz20 font-bold">
                Hotels.com International
              </div>
              <div className="text-sz16 text-darkgray">$10.00</div>
            </div>
          </div>
          <div className="text-blue flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-4">
              <div className="text-sz16">Total Estimate</div>
              <img src={info} alt="info"></img>
            </div>
            <div className="text-sz20">0.00345 WHD</div>
          </div>
        </div>
        <div className="p-6 rounded-xl shadow-xl border border-blue flex flex-col space-y-6">
          <div className="text-blue text-sz22">Order details</div>
          <div className="flex flex-row items-end justify-between">
            <div className="flex flex-col">
              <div className="text-sz16">Email address</div>
              <div className="text-sz20 font-bold">Israel06.rex@gmail.com</div>
            </div>
            <img className="cursor-pointer" src={edit} alt="edit"></img>
          </div>
          <div className="flex flex-row items-end justify-between">
            <div className="flex flex-col">
              <div className="text-sz16">Payment method</div>
              <div className="text-sz20 font-bold">WHD Token (ERC20)</div>
            </div>
            <img className="cursor-pointer" src={edit} alt="edit"></img>
          </div>
          <div className="flex flex-col">
            <div className="text-sz16">Invoice id</div>
            <div className="text-sz20 font-bold">
              1fb61aa3-0c9c-4c15-97a3-446c6538bb46
            </div>
          </div>
          <div className="p-3 rounded-md bg-gray flex flex-row items-center space-x-4">
            <img src={cart_logo} alt="cart"></img>
            <div className="flex flex-col space-y-2">
              <div className="text-sz20 font-bold">
                Hotels.com International
              </div>
              <div className="text-sz16 text-darkgray">$10.00</div>
            </div>
          </div>
          <div className="text-blue flex flex-row items-center justify-between">
            <div className="text-sz16">Total</div>
            <div className="text-sz20">0.00345 WHD</div>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex flex-col space-y-8">
        <div className="p-6 rounded-xl shadow-xl border border-blue flex flex-col space-y-4">
          <div className="text-blue text-sz16">
            Email address for order status updates
          </div>
          <input
            type="text"
            id="website-admin"
            className="shadow-inner rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
          />
          <div className="flex flex-row items-center space-x-4">
            <img src={uncheck} alt="uncheck"></img>
            <div className="text-sz16">
              Add me to the newsletter to receive news about new products and
              features
            </div>
          </div>
          <div className="pb-4 border-b border-blue flex flex-row items-center space-x-4">
            <img src={check} alt="check"></img>
            <div className="text-sz16">
              I have read and agree with the{" "}
              <span className="font-bold">Terms & Conditions</span> and the{" "}
              <span className="font-bold">Privacy Policy</span>.
            </div>
          </div>
          <div className="z-10 cursor-pointer">
            <div className="shadow-sm text-2xl px-8 py-2 text-sz24 flex flex-col items-center border rounded-xl gradient-box">
              <div className="text-blue">Continue</div>
            </div>
          </div>
        </div>
        <div className="p-6 rounded-xl shadow-xl border border-blue flex flex-col space-y-4">
          <div className="p-4 text-blue text-sz16 bg-gray">
            Connect wallet to pay, receive rewards and more!
          </div>
          <div className="text-sz20 font-bold">Choose Payment method</div>
          <div className="flex flex-row items-center justify-between">
            <div className="p-2 bg-gray rounded-md flex flex-row items-center space-x-2">
              <img src={whitehat} alt="whitehat"></img>
              <div className="text-blue text-sz16 flex flex-col">
                <div className="font-bold">White Hat DAO (WHD)</div>
                <div>0.03452 WHD</div>
              </div>
            </div>
            <div className="p-2 bg-gray rounded-md flex flex-row items-center space-x-2">
              <img src={bitcoin} alt="bitcoin"></img>
              <div className="text-blue text-sz16 flex flex-col">
                <div className="font-bold">Bitcoin (BTC)</div>
                <div>0.000427 BTC</div>
              </div>
            </div>
            <div className="p-2 bg-gray rounded-md flex flex-row items-center space-x-2">
              <img src={ethereum} alt="ethereum"></img>
              <div className="text-blue text-sz16 flex flex-col">
                <div className="font-bold">Ethereum (ETH)</div>
                <div>0.005435 ETH</div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="p-2 bg-gray rounded-md flex flex-row items-center space-x-2">
              <img src={whitehat} alt="whitehat"></img>
              <div className="text-blue text-sz16 flex flex-col">
                <div className="font-bold">White Hat DAO (WHD)</div>
                <div>0.03452 WHD</div>
              </div>
            </div>
            <div className="p-2 bg-gray rounded-md flex flex-row items-center space-x-2">
              <img src={bitcoin} alt="bitcoin"></img>
              <div className="text-blue text-sz16 flex flex-col">
                <div className="font-bold">Bitcoin (BTC)</div>
                <div>0.000427 BTC</div>
              </div>
            </div>
            <div className="p-2 bg-gray rounded-md flex flex-row items-center space-x-2">
              <img src={ethereum} alt="ethereum"></img>
              <div className="text-blue text-sz16 flex flex-col">
                <div className="font-bold">Ethereum (ETH)</div>
                <div>0.005435 ETH</div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 rounded-xl shadow-xl border border-blue flex flex-col space-y-4">
          <div className="text-sz22 font-bold">Payment</div>
          <div className="p-4 text-blue text-sz16 bg-gray">
            Connect your wallet for the best experience
          </div>
          <div className="z-10 cursor-pointer">
            <div className="shadow-sm text-2xl px-8 py-2 text-sz24 flex flex-col items-center border rounded-md gradient-box">
              <div className="text-blue">Connect</div>
            </div>
          </div>
          <div className="pb-4 border-b border-blue flex flex-row items-center justify-between">
            <div className="p-2 bg-gray rounded-md flex flex-row items-center space-x-2 justify-between">
              <img src={metamask} alt="metamask"></img>
              <div className="text-sz24">Metamask</div>
            </div>
            <div className="p-2 bg-gray rounded-md flex flex-row items-center space-x-2 justify-between">
              <img src={wallet} alt="wallet"></img>
              <div className="text-sz24">Wallet Connect</div>
            </div>
            <div className="p-2 bg-gray rounded-md flex flex-row items-center space-x-2 justify-between">
              <img src={coinbase} alt="coinbase"></img>
              <div className="text-sz24">Coinbase</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
