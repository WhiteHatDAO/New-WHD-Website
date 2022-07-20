import whitehatlogo from "../../assets/images/blogpost/what_shield1.png"
import people from "../../assets/images/blogpost/people.png"
import chatBubble from "../../assets/images/blogpost/chat-bubble.png"
import chart from "../../assets/images/blogpost/chart.png"
import line from "../../assets/images/blogpost/line.png"
import ellipse from "../../assets/images/blogpost/ellipse.png"
import ellipse2 from "../../assets/images/blogpost/ellipse2.png"
import dot from "../../assets/images/blogpost/dot.png"
import like from "../../assets/images/blogpost/like.png"
import dislike from "../../assets/images/blogpost/dislike.png"
import message from "../../assets/images/blogpost/message.png"
import dummy from "../../assets/images/blogpost/dummy.png"
import reply from "../../assets/images/blogpost/reply.png"
import ProgressBar from "../../components/ProgressBar"

const TopicItem = () => {
  return (
    <div className="flex my-20 gap-x-16">
      <div className="w-2/3 border shadow-xl p-middle rounded-xl bg-lightgray border-blue">
        <div className="mb-5 font-medium leading-6 text-blue font-Manrope text-sz16">
          <span>WhiteHatDAO</span>
          <span className="font-semibold">  /  Proposals</span>
        </div>
        
        <div>
          <img src={line} alt="line" className="w-full mb-5" />
          <div className="flex items-center">
            <img src={dummy} alt="dummy" className="mr-4" />
            <div className="mr-2 font-semibold leading-6 font-Manrope text-sz16">dummy.eth</div>
            <img src={dot} alt="dot" className="mr-2" />
            <div className="font-normal leading-6 font-Manrope text-sz16">June 3, 2022</div>
          </div>
          <div className="flex mb-4 font-medium leading-3 text-center text-white gap-x-3 ml-14 text-sz10 font-Manrope">
            <div className="px-3 py-1 rounded-3xl bg-blue">Airdrop</div>
            <div className="px-3 py-1 rounded-3xl bg-pink">Security</div>
            <div className="px-3 py-1 rounded-3xl bg-purple">Blockchain</div>
          </div>
          <div className="mb-5 font-semibold leading-6 font-Manrope text-sz20 text-grey">Should we host twitter spaces and how often should this be?</div>
          <div className="mb-12 font-medium leading-6 font-Manrope text-sz16 text-grey">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div><br></br>
            <div>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div><br></br>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div><br></br>
          </div>
          <div className="flex justify-between px-middle mb-11 gap-x-12">
            <div className="w-1/2 border shadow-xl rounded-xl border-blue text-sz18">
              <div className="py-4 font-semibold leading-5 text-blue font-pilat px-middle bg-gray rounded-t-xl">Cast your vote</div>
              <div className="flex flex-col py-5 font-semibold leading-6 px-middle font-Manrope">
                <div className="w-full py-3 mb-4 text-center border rounded-full border-blue">Vote-YES</div>
                <div className="w-full py-3 mb-4 text-center border rounded-full border-blue">Vote-NO</div>
                <div className="w-full py-3 text-center border rounded-full border-blue">More discussions needed</div>
              </div>
            </div>

            <div className="w-1/2 border shadow-xl rounded-xl border-blue text-sz18">
              <div className="py-4 font-semibold leading-5 text-blue font-pilat px-middle bg-gray rounded-t-xl">Cast your vote</div>
              <div className="flex flex-col pt-6 font-semibold leading-6 pb-middle px-middle font-Manrope">
                <div className="w-full mb-6">
                  <div className="mb-3">Vote-YES <span className="text-blue">(87.3%)</span></div>
                  <ProgressBar percentage={87.3} />
                </div>
                <div className="w-full mb-6">
                  <div className="mb-3">Vote-NO <span className="text-blue">(10.8%)</span></div>
                  <ProgressBar percentage={10.8} />
                </div>
                <div className="w-full">
                  <div className="mb-3">More discussions needed <span className="text-blue">(1.9%)</span></div>
                  <ProgressBar percentage={1.9} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex mb-8 leading-6 font-Manrope text-sz16 text-blue">
            <img src={like} alt="like" className="h-6 mr-2" /> 2 Likes
            <img src={dislike} alt="dislike" className="h-6 ml-5 mr-2" /> 1 Dislike
            <img src={message} alt="message" className="h-6 ml-5 mr-2" /> 2 Comments
          </div>
          <img src={line} alt="line" className="w-full mb-5" />
          <div className="mb-6 leading-6 font-Manrope text-sz16">2 Comment</div>
          <input className="w-full h-12 px-3 py-5 mb-6 font-normal leading-6 border rounded-lg shadow-inner border-blue bg-lightgray font-Manrope text-sz16" placeholder="Make a comment"></input>
          <div className="flex items-center justify-end mb-8">
            <div className="mr-10 font-semibold leading-8 text-pink text-sz20 font-Manrope">Cancel</div>
            <div className="rounded shadow-xl p-border bg-gradient-to-r from-pink to-blue">
              <div className="px-12 py-3 font-bold leading-8 text-center rounded bg-gray text-blue font-Manrope text-sz24">
                Post
              </div>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <img src={ellipse2} alt="ellipse" className="mr-4" />
              <div className="mr-2 font-semibold leading-6 font-Manrope text-sz16">NFthinker.eth</div>
            </div>
            <div className="mb-6 font-Manrope text-sz16">
              <div className="p-4 rounded bg-gray">
                <div className="mb-5 font-medium leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                <div className="flex items-center justify-between leading-6 text-blue">
                  <div className="flex">
                    <img src={like} alt="like" className="h-6 mr-2" /> 2
                    <img src={dislike} alt="dislike" className="h-6 ml-5 mr-2" /> 2
                    <img src={message} alt="message" className="h-6 ml-5 mr-2" /> 1
                  </div>
                  Reply
                </div>
              </div>
              <div className="flex justify-start">
                <div className="w-1/12"><img src={reply} alt="reply" className="mr-4 ml-11" /></div>
                <div className="float-right w-11/12 p-4 mt-2 font-medium leading-5 rounded bg-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <img src={ellipse} alt="ellipse" className="mr-4" />
              <div className="mr-2 font-semibold leading-6 font-Manrope text-sz16">Humanshield</div>
            </div>
            <div className="mb-6 font-Manrope text-sz16">
              <div className="p-4 rounded bg-gray">
                <div className="mb-5 font-medium leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                <div className="flex items-center justify-between leading-6 text-blue">
                  <div className="flex">
                    <img src={like} alt="like" className="h-6 mr-2" /> 2
                    <img src={dislike} alt="dislike" className="h-6 ml-5 mr-2" /> 1
                    <img src={message} alt="message" className="h-6 ml-5 mr-2" /> 1
                  </div>
                  Reply
                </div>
              </div>
            </div>
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

export default TopicItem;
