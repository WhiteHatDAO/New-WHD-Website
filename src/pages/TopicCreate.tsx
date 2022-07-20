import whitehatlogo from "../assets/images/blogpost/what_shield1.png"
import people from "../assets/images/blogpost/people.png"
import chatBubble from "../assets/images/blogpost/chat-bubble.png"
import chart from "../assets/images/blogpost/chart.png"
import line from "../assets/images/blogpost/line.png"
import plus from "../assets/images/blogpost/plus.png"
import down from "../assets/images/blogpost/down.png"
import dot from "../assets/images/blogpost/dot.png"
import dummy from "../assets/images/blogpost/dummy.png"
import talk from "../assets/images/blogpost/talk.png"
import bold from "../assets/images/blogpost/bold.png"
import italic from "../assets/images/blogpost/italic.png"
import link from "../assets/images/blogpost/link.png"
import quote from "../assets/images/blogpost/quote.png"
import code from "../assets/images/blogpost/code.png"
import image from "../assets/images/blogpost/image.png"
import olist from "../assets/images/blogpost/olist.png"
import uolist from "../assets/images/blogpost/uolist.png"
import smile from "../assets/images/blogpost/smile.png"
import calendar from "../assets/images/blogpost/calendar.png"
import setting from "../assets/images/blogpost/setting.png"
import create from "../assets/images/blogpost/create.png"

const TopicCreate = () => {
  return (
    <div className="flex my-20 gap-x-16">
      <div className="w-2/3 border shadow-xl p-middle rounded-xl bg-lightgray border-blue">
        <div className="mb-5 font-medium leading-6 text-blue font-Manrope text-sz16">
          <span>WhiteHatDAO</span>
          <span className="font-semibold">  /  Create a new topic</span>
        </div>        
        <div>
          <img src={line} alt="line" className="w-full mb-5" />
          <div className="flex items-center mb-6">
            <img src={dummy} alt="dummy" className="mr-4" />
            <div className="mr-2 font-semibold leading-6 font-Manrope text-sz16">dummy.eth</div>
            <img src={dot} alt="dot" className="mr-2" />
            <div className="font-normal leading-6 font-Manrope text-sz16">June 3, 2022</div>
          </div>
          <div className="flex items-center mb-6 font-medium leading-6 text-sz16 text-blue font-Manrope">
            <img src={plus} alt="plus" className="mr-3" />
            Add Tags on your Article
          </div>
          <div className="flex items-center justify-between mb-5 mb-6 font-normal text-sz16 font-Manrope">
            <input className="w-2/3 h-12 px-3 py-5 leading-6 border rounded-lg shadow-inner border-blue bg-lightgray" placeholder="Type title, or paste a link here"></input>
            <div className="w-1/4 px-5 py-3 border rounded shadow-xl border-blue">
              <div className="flex items-center justify-between">
                Category
                <img src={down} alt="down" />
              </div>
            </div>
          </div>          
          <div className="mb-6 border rounded-lg border-blue">
            <div className="flex items-center px-8 py-4 rounded-t-lg bg-gray">
              <img src={talk} alt="talk" className="mr-10" />
              <img src={bold} alt="bold" className="mr-10" />
              <img src={italic} alt="italic" className="mr-10" />
              <img src={link} alt="link" className="mr-10" />
              <img src={quote} alt="quote" className="mr-10" />
              <img src={code} alt="code" className="mr-10" />
              <img src={image} alt="img" className="mr-10" />
              <img src={olist} alt="olist" className="mr-10" />
              <img src={uolist} alt="uolist" className="mr-10" />
              <img src={smile} alt="smile" className="mr-10" />
              <img src={calendar} alt="calendar" className="mr-10" />
              <img src={setting} alt="setting" className="mr-10" />
            </div>
            <textarea className="w-full h-56 px-3 py-5 leading-6 rounded-b-lg shadow-inner font-Manrope text-sz16 bg-lightgray" placeholder="Select a category before typing here."></textarea>
          </div>
          <div className="flex items-center justify-start mb-8">
            <div className="mr-10 rounded shadow-xl p-border bg-gradient-to-r from-pink to-blue">
              <div className="flex px-6 py-2 font-bold leading-8 text-center rounded bg-gray text-blue font-Manrope text-sz20">
                <img src={create} alt="create" className="h-8 mr-2" />                
                Create Topic
              </div>
            </div>
            <div className="mr-10 font-semibold leading-8 text-pink text-sz20 font-Manrope">Cancel</div>
          </div>
        </div>        
      </div>
      <div className="flex flex-col w-1/3">
        <div className="shadow-xl p-border bg-blue rounded-xl mb-14">
          <div className="flex justify-center py-6 bg-gradient-to-r from-blue to-pink rounded-t-xl">
            <img src={whitehatlogo} alt="logo" />
          </div>
          <div className="px-5 pt-5 pb-middle bg-lightgray rounded-b-xl">
            <div className="mb-4 font-bold leading-8 font-pilat text-sz24">WHITE HAT DAO</div>
            <div className="mb-2 leading-6 font-Manrope text-sz18 text-pink">www.whitehatdao.com</div>
            <div className="mb-5 leading-6 font-Manrope text-sz18 text-grey">Empowering community voice</div>
            <div className="flex mb-4 leading-6 font-Manrope text-sz16 text-blue">
              <img src={people} alt="people" className="h-5 mr-2" />
              2341 Members
            </div>
            <div className="flex mb-4 leading-6 font-Manrope text-sz16 text-blue">
              <img src={chatBubble} alt="people" className="h-6 mr-4" />
              234 Topics
            </div>
            <div className="flex mb-4 leading-6 font-Manrope text-sz16 text-blue">
              <img src={chart} alt="people" className="h-6 mr-7" />
              23 Proposals
            </div>
            <div className="rounded shadow-xl p-border bg-gradient-to-r from-pink to-blue">
              <div className="py-3 font-bold leading-8 text-center rounded bg-gray text-blue font-Manrope text-sz24">
                Join
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicCreate;
