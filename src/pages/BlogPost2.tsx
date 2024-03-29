import whitehatlogo from "../assets/images/blogpost/what_shield1.png"
import people from "../assets/images/blogpost/people.png"
import chatBubble from "../assets/images/blogpost/chat-bubble.png"
import chart from "../assets/images/blogpost/chart.png"
import home from "../assets/images/blogpost/home.png"
import file from "../assets/images/blogpost/file.png"
import openfile from "../assets/images/blogpost/openfile.png"
import line from "../assets/images/blogpost/line.png"
import ellipse from "../assets/images/blogpost/ellipse.png"
import dot from "../assets/images/blogpost/dot.png"
import like from "../assets/images/blogpost/like.png"
import message from "../assets/images/blogpost/message.png"
import web3 from "../assets/images/blogpost/web3.png"
import dummy from "../assets/images/blogpost/dummy.png"

const BlogPost2 = () => {
  return (
    <div className="flex my-20 gap-x-16">
      <div className="flex flex-col w-1/3">
        <div className="shadow-xl p-border bg-blue rounded-xl mb-14">
          <div className="flex justify-center py-6 bg-gradient-to-r from-blue to-pink rounded-t-xl">
            <img src={whitehatlogo} alt="logo" />
          </div>
          <div className="px-5 pt-5 pb-middle bg-lightgray rounded-b-xl">
            <div className="mb-4 font-bold leading-8 font-pilat text-sz18">WHITE HAT DAO</div>
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
              <div className="py-3 font-bold leading-8 text-center rounded bg-gray text-blue font-Manrope text-sz18">
                Join
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-xl p-border bg-blue rounded-xl">
          <div className="px-5 py-8 bg-lightgray rounded-xl">
            <div className="flex px-4 py-3 mb-8 font-semibold leading-6 rounded-md bg-gray font-Manrope text-blue text-sz18">
              <img src={home} alt="home" className="w-5 mr-5" />
              Home
            </div>
            <div className="px-4">
              <div className="flex mb-5 font-semibold leading-6 rounded-md font-Manrope text-blue text-sz18">
                <img src={file} alt="file" className="w-6 mr-4" />
                Categories
              </div>
              <div className="space-y-4">
                <div className="flex font-medium leading-6 rounded-md font-Manrope text-grey text-sz16">
                  <img src={openfile} alt="openfile" className="h-5 mr-4" />
                  General
                </div>
                <div className="flex font-medium leading-6 rounded-md font-Manrope text-grey text-sz16">
                  <img src={openfile} alt="openfile" className="h-5 mr-4" />
                  DAO Proposals
                </div>
                <div className="flex font-medium leading-6 rounded-md font-Manrope text-grey text-sz16">
                  <img src={openfile} alt="openfile" className="h-5 mr-4" />
                  Web3 News Article
                </div>
                <div className="flex font-medium leading-6 rounded-md font-Manrope text-grey text-sz16">
                  <img src={openfile} alt="openfile" className="h-5 mr-4" />
                  Web3 Education / Academy
                </div>
                <div className="flex font-medium leading-6 rounded-md font-Manrope text-grey text-sz16">
                  <img src={openfile} alt="openfile" className="h-5 mr-4" />
                  Support / Suggestions
                </div>
                <div className="flex font-medium leading-6 rounded-md font-Manrope text-grey text-sz16">
                  <img src={openfile} alt="openfile" className="h-5 mr-4" />
                  New Projects Discussion
                </div>
                <div className="flex font-medium leading-6 rounded-md font-Manrope text-grey text-sz16">
                  <img src={openfile} alt="openfile" className="h-5 mr-4" />
                  WHD Announcements & Updates
                </div>
                <div className="flex font-medium leading-6 rounded-md font-Manrope text-grey text-sz16">
                  <img src={openfile} alt="openfile" className="h-5 mr-4" />
                  WHD Partnership & Collaborations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/3 border shadow-xl p-middle rounded-xl bg-lightgray border-blue">
        <div className="mb-12 font-bold leading-8 font-pilat text-sz18">DAO Proposals</div>
        <div>
          <img src={line} alt="line" className="w-full my-5" />
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={ellipse} alt="CD" className="mr-4" />
              <div className="mr-2 font-semibold leading-6 font-Manrope text-sz16">Israelrex.eth</div>
              <div className="font-normal leading-6 font-Manrope text-sz16">Proposals</div>
              <img src={dot} alt="dot" className="mx-2" />
              <div className="font-normal leading-6 font-Manrope text-sz16">by 0x43E...7145</div>
              <img src={dot} alt="dot" className="mx-2" />
              <div className="font-normal leading-6 font-Manrope text-sz16">June 3, 2022</div>
            </div>
            <div className="px-4 py-1 font-medium leading-4 text-center text-white rounded-3xl bg-blue gap-x-3 ml-14 text-sz12 font-Manrope">Closed</div>
          </div>
          <div className="flex mb-4 font-medium leading-3 text-center text-white gap-x-3 ml-14 text-sz10 font-Manrope">
            <div className="px-3 py-1 rounded-3xl bg-blue">Airdrop</div>
            <div className="px-3 py-1 rounded-3xl bg-pink">Security</div>
            <div className="px-3 py-1 rounded-3xl bg-purple">Blockchain</div>
          </div>
          <div className="mb-2 font-semibold leading-6 font-Manrope text-sz18 text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          <div className="font-medium leading-6 font-Manrope text-sz16 text-grey">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </div>
        <div>
          <img src={line} alt="line" className="w-full my-5" />
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={ellipse} alt="CD" className="mr-4" />
              <div className="mr-2 font-semibold leading-6 font-Manrope text-sz16">Israelrex.eth</div>
              <div className="font-normal leading-6 font-Manrope text-sz16">Proposals</div>
              <img src={dot} alt="dot" className="mx-2" />
              <div className="font-normal leading-6 font-Manrope text-sz16">by 0x43E...7145</div>
              <img src={dot} alt="dot" className="mx-2" />
              <div className="font-normal leading-6 font-Manrope text-sz16">June 3, 2022</div>
            </div>
            <div className="px-4 py-1 font-medium leading-4 text-center text-white rounded-3xl bg-pink gap-x-3 ml-14 text-sz12 font-Manrope">Open</div>
          </div>
          <div className="flex mb-4 font-medium leading-3 text-center text-white gap-x-3 ml-14 text-sz10 font-Manrope">
            <div className="px-3 py-1 rounded-3xl bg-blue">Airdrop</div>
            <div className="px-3 py-1 rounded-3xl bg-pink">Security</div>
            <div className="px-3 py-1 rounded-3xl bg-purple">Blockchain</div>
          </div>
          <div className="mb-2 font-semibold leading-6 font-Manrope text-sz18 text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          <div className="mb-4 font-medium leading-6 font-Manrope text-sz16 text-grey">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          <div className="flex leading-6 font-Manrope text-sz16 text-blue">
            <img src={like} alt="like" className="h-5 mr-2" /> 2
            <img src={message} alt="message" className="h-5 ml-5 mr-2" /> 2
          </div>
        </div>
        <div>
          <img src={line} alt="line" className="w-full my-5" />
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={dummy} alt="user" className="mr-4" />
              <div className="mr-2 font-semibold leading-6 font-Manrope text-sz16">Israelrex.eth</div>
              <div className="font-normal leading-6 font-Manrope text-sz16">Proposals</div>
              <img src={dot} alt="dot" className="mx-2" />
              <div className="font-normal leading-6 font-Manrope text-sz16">by 0x43E...7145</div>
              <img src={dot} alt="dot" className="mx-2" />
              <div className="font-normal leading-6 font-Manrope text-sz16">June 3, 2022</div>
            </div>
            <div className="px-4 py-1 font-medium leading-4 text-center text-white rounded-3xl bg-pink gap-x-3 ml-14 text-sz12 font-Manrope">Open</div>
          </div>
          <div className="flex mb-4 font-medium leading-3 text-center text-white gap-x-3 ml-14 text-sz10 font-Manrope">
            <div className="px-3 py-1 rounded-3xl bg-blue">Airdrop</div>
            <div className="px-3 py-1 rounded-3xl bg-pink">Security</div>
            <div className="px-3 py-1 rounded-3xl bg-purple">Blockchain</div>
          </div>
          <div className="mb-2 font-semibold leading-6 font-Manrope text-sz18 text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          <div className="mb-4 font-medium leading-6 font-Manrope text-sz16 text-grey">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          <img src={web3} alt="web3" className="mt-4 mb-5" />
          <div className="flex leading-6 font-Manrope text-sz16 text-blue">
            <img src={like} alt="like" className="h-5 mr-2" /> 2
            <img src={message} alt="message" className="h-5 ml-5 mr-2" /> 2
          </div>
        </div>
        <div>
          <img src={line} alt="line" className="w-full my-5" />
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={dummy} alt="user" className="mr-4" />
              <div className="mr-2 font-semibold leading-6 font-Manrope text-sz16">Israelrex.eth</div>
              <div className="font-normal leading-6 font-Manrope text-sz16">Proposals</div>
              <img src={dot} alt="dot" className="mx-2" />
              <div className="font-normal leading-6 font-Manrope text-sz16">by 0x43E...7145</div>
              <img src={dot} alt="dot" className="mx-2" />
              <div className="font-normal leading-6 font-Manrope text-sz16">June 3, 2022</div>
            </div>
            <div className="px-4 py-1 font-medium leading-4 text-center text-white rounded-3xl bg-pink gap-x-3 ml-14 text-sz12 font-Manrope">Open</div>
          </div>
          <div className="flex mb-4 font-medium leading-3 text-center text-white gap-x-3 ml-14 text-sz10 font-Manrope">
            <div className="px-3 py-1 rounded-3xl bg-blue">Airdrop</div>
            <div className="px-3 py-1 rounded-3xl bg-pink">Security</div>
            <div className="px-3 py-1 rounded-3xl bg-purple">Blockchain</div>
          </div>
          <div className="mb-2 font-semibold leading-6 font-Manrope text-sz18 text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          <div className="mb-4 font-medium leading-6 font-Manrope text-sz16 text-grey">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          <img src={web3} alt="web3" className="mt-4 mb-5" />
          <div className="flex leading-6 font-Manrope text-sz16 text-blue">
            <img src={like} alt="like" className="h-5 mr-2" /> 2
            <img src={message} alt="message" className="h-5 ml-5 mr-2" /> 2
          </div>
        </div>
        <div>
          <img src={line} alt="line" className="w-full my-5" />
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={dummy} alt="user" className="mr-4" />
              <div className="mr-2 font-semibold leading-6 font-Manrope text-sz16">Israelrex.eth</div>
              <div className="font-normal leading-6 font-Manrope text-sz16">Proposals</div>
              <img src={dot} alt="dot" className="mx-2" />
              <div className="font-normal leading-6 font-Manrope text-sz16">by 0x43E...7145</div>
              <img src={dot} alt="dot" className="mx-2" />
              <div className="font-normal leading-6 font-Manrope text-sz16">June 3, 2022</div>
            </div>
            <div className="px-4 py-1 font-medium leading-4 text-center text-white rounded-3xl bg-pink gap-x-3 ml-14 text-sz12 font-Manrope">Open</div>
          </div>
          <div className="flex mb-4 font-medium leading-3 text-center text-white gap-x-3 ml-14 text-sz10 font-Manrope">
            <div className="px-3 py-1 rounded-3xl bg-blue">Airdrop</div>
            <div className="px-3 py-1 rounded-3xl bg-pink">Security</div>
            <div className="px-3 py-1 rounded-3xl bg-purple">Blockchain</div>
          </div>
          <div className="mb-2 font-semibold leading-6 font-Manrope text-sz18 text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          <div className="mb-4 font-medium leading-6 font-Manrope text-sz16 text-grey">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          <img src={web3} alt="web3" className="mt-4 mb-5" />
          <div className="flex leading-6 font-Manrope text-sz16 text-blue">
            <img src={like} alt="like" className="h-5 mr-2" /> 2
            <img src={message} alt="message" className="h-5 ml-5 mr-2" /> 2
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost2;
