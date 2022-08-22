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
import barcode from "../assets/images/shop/barcode.png";
import foldo from "../assets/images/shop/foldo.png";
import copy from "../assets/images/shop/copy.png";
import spin from "../assets/images/shop/spin.png";
import transaction_success from "../assets/images/shop/success.png";
import mark from "../assets/images/shop/mark.png";
import bar from "../assets/images/shop/bar.png";
import review from "../assets/images/shop/review.png";
import copy_black from "../assets/images/shop/copy_black.svg";

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
          <div className="flex flex-row gap-4">
            <img src={barcode} alt="barcode"></img>
            <div className="text-blue flex flex-col space-y-4">
              <div className="bg-gray rounded-md p-2 flex flex-row items-center space-x-2">
                <img src={info} alt="info"></img>
                <div className="text-sz16">
                  Only send WHD using Ethereum network
                </div>
              </div>
              <div className="z-10 cursor-pointer">
                <div className="shadow-sm text-2xl px-8 py-2 text-sz24 flex flex-row items-center space-x-2 justify-center border rounded-md gradient-box">
                  <img src={foldo} alt="foldo"></img>
                  <div className="text-blue text-sz18">Pay in Wallet</div>
                </div>
              </div>
              <div className="rounded-md shadow-sm flex flex-row items-center">
                <div className="p-2 text-blue">0xd4ebc61981e...E2346D534C</div>
                <div className="bg-blue w-full rounded-r p-2 text-white flex flex-row items-center justify-center space-x-2">
                  <img src={copy} alt="copy"></img>
                  <div className="text-sz18">Copy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 rounded-xl shadow-xl border border-blue flex flex-col space-y-4">
          <div className="flex flex-col items-center justify-center">
            <img src={spin} alt="spin"></img>
          </div>
          <div className="text-center text-sz22">Payment Pending</div>
          <div className="text-center text-sz16">
            We have detected your payment of{" "}
            <span className="font-bold">0.00345 WHD</span> and are waiting for
            it to be confirmed on the network. You may continue to{" "}
            <span className="font-bold">browse & buy products</span>. We will
            send you an email once confimed
          </div>
          <div className="pt-4 text-blue flex flex-row items-center justify-center space-x-2">
            <div className="text-sz16">Show Details</div>
            <svg
              width="16"
              height="8"
              viewBox="0 0 16 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0L8 8L16 0H0Z" fill="#346DA1" />
            </svg>
          </div>
          <div className="bg-gray p-4 rounded-xl text-blue text-sz16 flex flex-col space-y-2">
            <div className="flex flex-row items-center justify-between">
              <div>Amount received:</div>
              <div className="font-bold">0.00345 WHD</div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div>Network:</div>
              <div>Ethereum</div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div>From:</div>
              <div>0xd4ebc61981e5B9AB392b68f2638012E2346D534C</div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div>To:</div>
              <div>0xd4ebc61981e5B9AB392b68f2638012E2346D534C</div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div>Txid:</div>
              <div>
                0xd4ebc61981e5B9AB392b68012E2346D534C8f2638012E2346D534C
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col items-center space-y-4">
            <img
              className="w-20 h-20"
              src={transaction_success}
              alt="transaction_success"
            ></img>
            <div className="text-sz22 font-bold">Order completed</div>
            <div className="text-sz16">Thank you for your purchase</div>
          </div>
          <div className="p-8 rounded-xl bg-gray background_cover flex flex-col justify-between">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center space-x-4">
                <img src={cart_logo} alt="cart logo"></img>
                <div className="text-sz20">Hotels.com International</div>
              </div>
              <div className="font-bold text-sz24">$10.00</div>
            </div>
            <div className="pt-10 flex flex-col space-y-4">
              <div className="text-sz16">Gift card code</div>
              <div
                className="rounded-xl border border-darkgray h-16"
                style={{ background: "#C8C9D9" }}
              ></div>
            </div>
          </div>
          <div className="text-sz16">
            To redeem this gift card: 1. Go to the Payment section in the Hotels
            app. 2. Tap Add payment method ansd select Gift Card. 3. Enter Gift
            Card Code.
          </div>
          <div className="mx-8 p-4 text-sz16 bg-gray rounded-md flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-2">
              <img src={mark} alt="mark"></img>
              <div>Mark as used</div>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <img src={bar} alt="bar"></img>
              <div>Barcode</div>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <img src={review} alt="review"></img>
              <div>Review item</div>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <img src={copy_black} alt="copy"></img>
              <div>Copy Link</div>
            </div>
          </div>
          <div className="border-t border-b py-4 border-blue flex flex-row items-center justify-center space-x-4">
            <img src={uncheck} alt="uncheck"></img>
            <div className="text-sz16">
              Always unseal all orders automatically
            </div>
          </div>
          <div className="border border-blue rounded-xl p-4 flex flex-col items-center justify-center text-sz16 space-y-6">
            <div className="font-bold">Help us get better</div>
            <div>
              Tell us about how you use WHD Giftcards store, so we can serve you
              better in the future!
            </div>
            <div className="font-bold flex flex-row items-center">
              <div>Answer a few quick questions</div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <div className="z-10 cursor-pointer">
            <div className="shadow-sm text-2xl px-8 py-2 text-sz24 flex flex-col items-center border rounded-md gradient-box">
              <div className="text-blue">New order</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
