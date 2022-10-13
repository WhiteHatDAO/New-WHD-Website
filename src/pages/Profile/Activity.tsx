import avatar from '../../assets/images/profile/avatar.png'
import swol from '../../assets/images/profile/swol.png'
import dot from "../../assets/images/blogpost/dot.png"
import openfile from "../../assets/images/blogpost/openfile.png"
import line from "../../assets/images/blogpost/line.png"

const Activity = () => {
    return (
        <div className='my-20 mx-4'>
            <div className='p-5 border shadow-xl rounded-xl border-blue font-Manrope mb-14'>
                <div className='flex items-start mb-10'>
                    <img src={avatar} alt="avatar" className='mr-5' />
                    <div>
                        <div className='mb-2 font-bold leading-8 text-sz18'>NF Thinker</div>
                        <div className='mb-3 font-medium leading-6 text-sz18 text-pink'>www.nfthinker.com</div>
                        <div className='leading-5 text-sz16'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br></br>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </div>
                <div className='flex px-5 py-2 font-medium bg-gray text-ligthgrey'>
                    <div className='flex items-center mr-8'>Joined <span className='ml-1 text-lightblack'> May 25</span></div>
                    <div className='flex items-center mr-8'>Views <span className='ml-1 text-lightblack'> 105</span></div>
                    <div className='flex items-center mr-8'>Last Post <span className='ml-1 text-lightblack'> Jun 24</span></div>
                    <div className='flex items-center mr-8'>Trust Level <span className='ml-1 text-lightblack'> Basic User</span></div>
                    <div className='flex items-center mr-8'>Seen <span className='ml-1 text-lightblack'> 11 Hours</span></div>
                </div>
            </div>

            <div className='border p-middle font-Manrope border-blue rounded-xl'>
                <div className='flex items-center mb-12 font-bold leading-8 gap-x-7 text-sz18'>
                    <div>Summary</div>
                    <div className='px-5 py-1 rounded bg-darkwhite'>Activity</div>
                    <div>Notifications</div>
                    <div>Settings</div>
                </div>

                <div className='flex items-start gap-x-16 mb-11 font-Manrope'> 
                    <div className='w-1/4 p-5 rounded bg-gray'>
                        <div className='w-full px-4 py-3 font-semibold leading-6 rounded bg-lightgray text-blue text-sz18'>All</div>
                        <div className='pt-5 space-y-5 leading-6 text-sz16 px-middle'>
                            <div>Topics</div>
                            <div>Replies</div>
                            <div>Read</div>
                            <div>Drafts</div>
                            <div>Likes</div>
                            <div>Bookmarks</div>
                        </div>
                    </div>

                    <div className='w-3/4 rounded p-middle bg-gray'>
                        <div>
                            <div className='flex items-center mb-4'>
                                <img src={swol} alt="avatar" className='mr-2' />
                                <div className='font-medium leading-5 rounded text-sz18'>
                                    <div className='mb-1 text-blue'>Discord Proposal for WhiteHatDAO meetings</div>
                                    <div className='flex items-center text-ligthgrey'>
                                        <img src={openfile} alt="openfile" className="mr-2" />
                                        <div className="font-normal leading-6 font-Manrope text-sz16">DAO Proposals</div>
                                        <img src={dot} alt="dot" className='mx-2' />
                                        <div className="font-normal leading-6 font-Manrope text-sz16">June 25th, 2022</div>
                                    </div>
                                </div>
                            </div>
                            <div className='font-medium leading-5 text-sz16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                        </div>
                        <img src={line} alt="line" className='w-full my-5' />
                        <div>
                            <div className='flex items-center mb-4'>
                                <img src={swol} alt="avatar" className='mr-2' />
                                <div className='font-medium leading-5 rounded text-sz18'>
                                    <div className='mb-1 text-blue'>Discord Proposal for WhiteHatDAO meetings</div>
                                    <div className='flex items-center text-ligthgrey'>
                                        <img src={openfile} alt="openfile" className="mr-2" />
                                        <div className="font-normal leading-6 font-Manrope text-sz16">DAO Proposals</div>
                                        <img src={dot} alt="dot" className='mx-2' />
                                        <div className="font-normal leading-6 font-Manrope text-sz16">June 25th, 2022</div>
                                    </div>
                                </div>
                            </div>
                            <div className='font-medium leading-5 text-sz16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                        </div>
                        <img src={line} alt="line" className='w-full mt-5' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activity;