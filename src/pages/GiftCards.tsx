import white_hat from "../assets/images/shop/whitehat.png";
import ether from "../assets/images/shop/ether.png";
import matic from "../assets/images/shop/matic.png";
import shopmark from "../assets/images/shop/shopmark.png";
import top_gitcards from "../assets/images/shop/top_gitcards.png";
import games from "../assets/images/shop/games.png";
import ecommerce from "../assets/images/shop/ecommerce.png";
import entertainment from "../assets/images/shop/entertainment.png";
import electronics from "../assets/images/shop/electronics.png";
import travel from "../assets/images/shop/travel.png";
import apparel from "../assets/images/shop/apparel.png";
import fyi from "../assets/images/shop/fyi.png";
import how_it_works from "../assets/images/shop/how_it_works.png";
import freq_question from "../assets/images/shop/freq_question.png";
import whd_discussion from "../assets/images/shop/whd_discussion.png";
import req_add_product from "../assets/images/shop/req_add_product.png";
import partnership from "../assets/images/shop/partnership.png";
import contact from "../assets/images/shop/contact.png";
import cart from "../assets/images/shop/cart.png";
import hotel from "../assets/images/shop/hotel.png";
import nufferton from "../assets/images/shop/nufferton.png";
import swaggy from "../assets/images/shop/swaggy.png";
import beeer_tan from "../assets/images/shop/beeer_tan.png";

const cards = [
  {
    image: hotel,
    text: "Hotels.com",
  },
  {
    image: nufferton,
    text: "Nufferton",
  },
  {
    image: swaggy,
    text: "Swaggy",
  },
  {
    image: beeer_tan,
    text: "Beeer Tan",
  },
  {
    image: hotel,
    text: "Hotels.com",
  },
  {
    image: nufferton,
    text: "Nufferton",
  },
  {
    image: swaggy,
    text: "Swaggy",
  },
  {
    image: beeer_tan,
    text: "Beeer Tan",
  },
  {
    image: hotel,
    text: "Hotels.com",
  },
  {
    image: nufferton,
    text: "Nufferton",
  },
  {
    image: swaggy,
    text: "Swaggy",
  },
  {
    image: beeer_tan,
    text: "Beeer Tan",
  },
  {
    image: hotel,
    text: "Hotels.com",
  },
  {
    image: nufferton,
    text: "Nufferton",
  },
  {
    image: swaggy,
    text: "Swaggy",
  },
  {
    image: beeer_tan,
    text: "Beeer Tan",
  },
  {
    image: hotel,
    text: "Hotels.com",
  },
  {
    image: nufferton,
    text: "Nufferton",
  },
  {
    image: swaggy,
    text: "Swaggy",
  },
  {
    image: beeer_tan,
    text: "Beeer Tan",
  },
  {
    image: beeer_tan,
    text: "Beeer Tan",
  },
];

const GiftCards = () => {
  return (
    <div className="mx-4 my-10 font-Manrope flex flex-col space-y-8">
      <div className="rounded-xl shadow-xl flex flex-col lg:flex-row justify-between">
        <div className="p-8 flex flex-col space-y-8">
          <div className="text-sz28 lg:text-sz48 font-bold">
            <span>Shop with </span>
            <span className="text-pink">Crypto</span>
          </div>
          <div className="text-sz16 lg:text-sz24">
            Gift Cards are the easiest way to live on crypto! We have the
            Biggest Brands! 🛍️ Explore for your favourites!
          </div>
          <div className="p-2 rounded-md bg-gray flex flex-col lg:flex-row items-start lg:items-center gap-2">
            <div className="font-bold text-sz16 text-blue">Buy Gift Cards</div>
            <div className="flex flex-col lg:flex-row items-center gap-2">
              <div className="flex flex-row items-center gap-2">
                <div className="text-sz14">Pay with:</div>
                <div className="flex flex-row items-center text-sz14 text-pink gap-1">
                  <img src={white_hat} alt="white hat"></img>
                  <div>White Hat DAO Token (WHD)</div>
                </div>
              </div>
              <div className="hidden lg:block">
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
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="text-sz14">Available Networks:</div>
                <img src={ether} alt="ether"></img>
                <img src={matic} alt="matic"></img>
              </div>
            </div>
          </div>
        </div>
        <img className="h-full" src={shopmark} alt="shopmark"></img>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <div className="flex flex-col gap-8">
          <div className="p-4 rounded-xl shadow-xl flex flex-col gap-4 text-blue text-sz20">
            <div className="px-4 py-1 rounded-md flex flex-row space-x-2">
              <img src={top_gitcards} alt="top_gitcards"></img>
              <div>Top GiftCards</div>
            </div>
            <div className="px-4 py-1 rounded-md flex flex-row space-x-2">
              <img src={games} alt="games"></img>
              <div>Games</div>
            </div>
            <div className="px-4 py-1 rounded-md flex flex-row space-x-2">
              <img src={ecommerce} alt="ecommerce"></img>
              <div>Ecommerce</div>
            </div>
            <div className="px-4 py-1 rounded-md flex flex-row space-x-2">
              <img src={entertainment} alt="entertainment"></img>
              <div>Entertainment</div>
            </div>
            <div className="px-4 py-1 rounded-md flex flex-row space-x-2">
              <img src={electronics} alt="electronics"></img>
              <div>Electronics</div>
            </div>
            <div className="px-4 py-1 rounded-md flex flex-row space-x-2">
              <img src={travel} alt="travel"></img>
              <div>Travel</div>
            </div>
            <div className="px-4 py-1 rounded-md flex flex-row space-x-2">
              <img src={apparel} alt="apparel"></img>
              <div>Apparel</div>
            </div>
          </div>
          <div className="p-4 rounded-xl shadow-xl flex flex-col gap-4 text-blue text-sz20">
            <div className="px-4 py-1 rounded-md flex flex-row space-x-2">
              <img src={fyi} alt="fyi"></img>
              <div>FYI - Category</div>
            </div>
            <div className="px-4 py-1 rounded-md flex flex-row space-x-2">
              <img src={how_it_works} alt="How it works"></img>
              <div>How it works</div>
            </div>
            <div className="px-4 py-1 rounded-md flex flex-row space-x-2">
              <img src={freq_question} alt="freq_question"></img>
              <div>Frequently Asked Questions</div>
            </div>
            <div className="px-4 py-1 rounded-md flex flex-row space-x-2">
              <img src={whd_discussion} alt="WHD Discussion forum"></img>
              <div>WHD Discussion forum</div>
            </div>
            <div className="px-4 py-1 rounded-md flex flex-row space-x-2">
              <img src={req_add_product} alt="Request to add a product"></img>
              <div>Request to add a product</div>
            </div>
            <div className="px-4 py-1 rounded-md flex flex-row space-x-2">
              <img src={partnership} alt="Partnership"></img>
              <div>Partnership</div>
            </div>
            <div className="px-4 py-1 rounded-md flex flex-row space-x-2">
              <img src={contact} alt="Contact Admin for help"></img>
              <div>Contact Admin for help</div>
            </div>
          </div>
        </div>
        <div className="col-span-2 p-8 rounded-xl shadow-xl flex flex-col space-y-6">
          <div className="flex flex-row items-center justify-between">
            <div className="text-sz24 font-bold font-pilat">Top Giftcards</div>
            <div className="px-2 rounded-md bg-gray flex flex-row items-center">
              <img src={cart} alt="cart"></img>
              <div className="text-sz20 text-blue">Cart</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="text-sz20 flex flex-col items-center text-center space-y-6"
              >
                <img src={card.image} alt={card.text}></img>
                <div>{card.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCards;
