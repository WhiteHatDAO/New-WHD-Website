import white_hat from "../assets/images/shop/whitehat.png";
import ether from "../assets/images/shop/ether.png";
import matic from "../assets/images/shop/matic.png";
import shopmark from "../assets/images/shop/shopmark.png";

const GiftCards = () => {
  return (
    <div className="mx-4 my-10 font-Manrope flex flex-col space-y-8">
      <div className="rounded-xl shadow-xl flex flex-row justify-between">
        <div className="p-8 flex flex-col space-y-8">
          <div className="text-sz48 font-bold">
            <span>Shop with </span>
            <span className="text-pink">Crypto</span>
          </div>
          <div className="text-sz24">
            Gift Cards are the easiest way to live on crypto! We have the
            Biggest Brands! 🛍️ Explore for your favourites!
          </div>
          <div className="p-2 rounded-md bg-gray flex flex-row items-center">
            <div className="font-bold text-sz16 text-blue">Buy Gift Cards</div>
            <div className="text-sz14">Pay with:</div>
            <div className="flex flex-row items-center gap-2">
              <div className="text-sz16 font-bold">Buy Gift Cards</div>
              <div className="text-sz14">Pay with:</div>
              <div className="flex flex-row items-center text-sz14 text-pink gap-1">
                <img src={white_hat} alt="white hat"></img>
                <div>White Hat DAO Token (WHD)</div>
              </div>
              <svg
                width="1"
                height="20"
                viewBox="0 0 1 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.390234"
                  y1="-6.55671e-09"
                  x2="0.390235"
                  y2="20"
                  stroke="#7C7C7C"
                  stroke-width="0.3"
                />
              </svg>
              <div className="text-sz14">Available Networks:</div>
              <img src={ether} alt="ether"></img>
              <img src={matic} alt="matic"></img>
            </div>
          </div>
        </div>
        <img className="h-full" src={shopmark} alt="shopmark"></img>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col gap-6">
          <div className="p-4 rounded-xl shadow-xl flex flex-col gap-4">

          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCards;
