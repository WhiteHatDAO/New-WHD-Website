import rating from "../assets/images/shop/rating.png";
import cart from "../assets/images/shop/cart.png";
import purchase from "../assets/images/shop/purchase.png";
import hotel from "../assets/images/shop/hotel.png";
import nufferton from "../assets/images/shop/nufferton.png";
import swaggy from "../assets/images/shop/swaggy.png";
import beeer_tan from "../assets/images/shop/beeer_tan.png";

const cards = [
    {
        image: hotel,
        text: "Hotels.com"
    },
    {
        image: nufferton,
        text: "Nufferton"
    },
    {
        image: swaggy,
        text: "Swaggy"
    },
    {
        image: beeer_tan,
        text: "Beeer Tan"
    },
    {
        image: hotel,
        text: "Hotels.com"
    },
    {
        image: nufferton,
        text: "Nufferton"
    },
    {
        image: swaggy,
        text: "Swaggy"
    },
    {
        image: beeer_tan,
        text: "Beeer Tan"
    },
    {
        image: hotel,
        text: "Hotels.com"
    },
    {
        image: nufferton,
        text: "Nufferton"
    },
    {
        image: swaggy,
        text: "Swaggy"
    },
    {
        image: beeer_tan,
        text: "Beeer Tan"
    },
    {
        image: hotel,
        text: "Hotels.com"
    },
    {
        image: nufferton,
        text: "Nufferton"
    },
    {
        image: swaggy,
        text: "Swaggy"
    },
    {
        image: beeer_tan,
        text: "Beeer Tan"
    },
    {
        image: hotel,
        text: "Hotels.com"
    },
    {
        image: nufferton,
        text: "Nufferton"
    },
    {
        image: swaggy,
        text: "Swaggy"
    },
    {
        image: beeer_tan,
        text: "Beeer Tan"
    },
]

const Card = () => {
  return (
    <div className="mx-4 my-10 font-Manrope flex flex-col space-y-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-96 rounded-xl h-96 shadow-xl border border-blue flex flex-col items-center justify-center px-20 py-20">
          <img src={hotel} alt="hotel"></img>
        </div>
        <div className="rounded-xl w-full shadow-xl border border-blue p-4 flex flex-col space-y-4">
          <div className="text-sz16 text-blue pb-3 border-b border-blue">
            Category / Travel / Hotels.com
          </div>
          <div className="font-pilat text-sz24">Hotels.com Gift Card</div>
          <div className="flex flex-row items-center gap-2">
            <img src={rating} alt="rating"></img>
            <div className="text-blue text-sz16">Rating: 5 - 14 reviews</div>
          </div>
          <div className="text-sz16">
            Hotels.com is the place to get all your favorite travel lodging
            bookings and reservations. With Bitrefill's Hotels.com gift card,
            you can now book your next hotel with Bitcoin, Ethereum, Dash,
            Dogecoin, and Litecoin.
          </div>
          <div className="text-blue text-sz20">Enter amount</div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <input
              type="text"
              id="website-admin"
              className="shadow-inner rounded-lg bg-lightgray border border-blue focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="$ 10.00 - 500.00"
            />
            <select
              id="category"
              className="bg-transparent shadow-sm border border-blue text-sz18 rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>(0 BTC) Estimated price</option>
              <option value="frontend">Solidity</option>
              <option value="backend">Web3</option>
              <option value="fullstack">Nest</option>
              <option value="BlockChain">React</option>
            </select>
          </div>
          <div className="flex flex-row items-center flex-wrap gap-6">
            <div className="z-10 cursor-pointer">
              <div className="shadow-sm px-8 py-2 border rounded-md gradient-box flex flex-col items-center">
                <div className="text-blue text-sz24 flex flex-row items-center space-x-2">
                  <img src={cart} alt="cart"></img>
                  <div>Add to cart</div>
                </div>
              </div>
            </div>
            <div className="shadow-sm px-8 py-2 rounded-md text-sz24 flex flex-row items-center text-blue space-x-2">
              <img src={purchase} alt="purchase"></img>
              <div>Purchase as gift</div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-gray flex flex-col space-y-4">
            <div className="text-blue font-bold text-sz20 flex flex-row items-center justify-between">
              <div>Description</div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 8L12 16L20 8H4Z" fill="#346DA1" />
              </svg>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-gray flex flex-col space-y-4">
            <div className="text-blue font-bold text-sz20 flex flex-row items-center justify-between">
              <div>How to Redeem</div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 8L12 16L20 8H4Z" fill="#346DA1" />
              </svg>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-gray flex flex-col space-y-4">
            <div className="text-blue font-bold text-sz20 flex flex-row items-center justify-between">
              <div>Reviews (12)</div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 8L12 16L20 8H4Z" fill="#346DA1" />
              </svg>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-gray flex flex-col space-y-4">
            <div className="text-blue font-bold text-sz20 flex flex-row items-center justify-between">
              <div>Terms and Conditions</div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 8L12 16L20 8H4Z" fill="#346DA1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-xl shadow-xl p-8 border-blue border flex flex-col space-y-4">
        <div className="text-sz24 font-pilat">More products</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {
                cards.map((card, index) => (
                    <div key={index} className="p-4 rounded-xl shadow-xl flex flex-col space-y-4">
                        <img src={card.image} className="rounded-sm" alt={card.text}></img>
                        <div className="text-sz24 text-center">{card.text}</div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default Card;
