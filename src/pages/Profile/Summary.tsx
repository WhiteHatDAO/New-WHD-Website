import avatar from '../../assets/images/profile/avatar.png'
import heart from '../../assets/images/profile/heart.png'
import swol from '../../assets/images/profile/swol.png'
import reply from '../../assets/images/profile/reply.png'
import dot from "../../assets/images/blogpost/dot.png"

const Profile = () => {
    return (
        <div className='my-20'>
            <div className='p-5 border shadow-xl rounded-xl border-blue font-Manrope mb-14'>
                <div className='flex items-start mb-10'>
                    <img src={avatar} alt="avatar" className='mr-5' />
                    <div>
                        <div className='mb-2 font-bold leading-8 text-sz24'>NF Thinker</div>
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
                <div className='flex items-center mb-6 font-bold leading-8 text-sz22'>
                    <div className='px-5 py-1 mr-12 rounded bg-darkwhite'>Summary</div>
                    <div>Activity</div>
                </div>
                <div className='flex items-center mb-4 font-bold leading-8 text-sz22'>Stats</div>
                <div className='flex px-5 py-2 mb-8 font-medium bg-gray text-ligthgrey'>
                    <div className='flex items-center mr-8'><span className='mr-1 text-lightblack'> 23</span> days visited</div>
                    <div className='flex items-center mr-8'><span className='mr-1 text-lightblack'> 2h</span> read time</div>
                    <div className='flex items-center mr-8'><span className='mr-1 text-lightblack'> 11</span> topic viewed</div>
                    <div className='flex items-center mr-8'><span className='mr-1 text-lightblack'> 74</span> posts read</div>
                    <div className='flex items-center mr-8'><span className='text-lightblack'> 3</span> <img src={heart} alt="heart" className='mx-1' />given</div>
                    <div className='flex items-center mr-8'><span className='text-lightblack'> 34</span> <img src={heart} alt="heart" className='mx-1' />received</div>
                    <div className='flex items-center mr-8'><span className='mr-1 text-lightblack'> 1</span> topic created</div>
                    <div className='flex items-center mr-8'><span className='mr-1 text-lightblack'> 3</span> posts created</div>
                </div>
                <div className='flex items-start mb-11 gap-x-12'>
                    <div className='w-1/2 p-5 rounded bg-gray'>
                        <div className='flex items-center mb-4 font-bold leading-8 text-sz22'>TOP REPLIES</div>
                        <div className='p-3 mb-4 font-medium leading-5 rounded bg-darkwhite text-sz18'>
                            <div className='text-blue'>(GENERAL) WhiteHatDAO Governance structure...</div>
                            <div className='flex items-center text-ligthgrey'>
                                <div className="font-normal leading-6 font-Manrope text-sz16">21d</div>
                                <img src={dot} alt="dot" className="mx-2" />
                                <div className="font-normal leading-6 font-Manrope text-sz16">3</div>
                                <img src={heart} alt="heart" className='mx-1' />
                            </div>
                        </div>
                        <div className='p-3 mb-4 font-medium leading-5 rounded bg-darkwhite text-sz18'>
                            <div className='text-blue'>(GENERAL) WhiteHatDAO Governance structure...</div>
                            <div className='flex items-center text-ligthgrey'>
                                <div className="font-normal leading-6 font-Manrope text-sz16">21d</div>
                                <img src={dot} alt="dot" className="mx-2" />
                                <div className="font-normal leading-6 font-Manrope text-sz16">3</div>
                                <img src={heart} alt="heart" className='mx-1' />
                            </div>
                        </div>
                        <div className='p-3 mb-4 font-medium leading-5 rounded bg-darkwhite text-sz18'>
                            <div className='text-blue'>(GENERAL) WhiteHatDAO Governance structure...</div>
                            <div className='flex items-center text-ligthgrey'>
                                <div className="font-normal leading-6 font-Manrope text-sz16">21d</div>
                                <img src={dot} alt="dot" className="mx-2" />
                                <div className="font-normal leading-6 font-Manrope text-sz16">3</div>
                                <img src={heart} alt="heart" className='mx-1' />
                            </div>
                        </div>
                        <div className='p-3 font-medium leading-5 rounded bg-darkwhite text-sz18'>
                            <div className='text-blue'>(GENERAL) WhiteHatDAO Governance structure...</div>
                            <div className='flex items-center text-ligthgrey'>
                                <div className="font-normal leading-6 font-Manrope text-sz16">21d</div>
                                <img src={dot} alt="dot" className="mx-2" />
                                <div className="font-normal leading-6 font-Manrope text-sz16">3</div>
                                <img src={heart} alt="heart" className='mx-1' />
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 p-5 rounded bg-gray'>
                        <div className='flex items-center mb-4 font-bold leading-8 text-sz22'>TOP TOPICS</div>
                        <div className='p-3 mb-4 font-medium leading-5 rounded bg-darkwhite text-sz18'>
                            <div className='text-blue'>(GENERAL) WhiteHatDAO Governance structure...</div>
                            <div className='flex items-center text-ligthgrey'>
                                <div className="font-normal leading-6 font-Manrope text-sz16">21d</div>
                                <img src={dot} alt="dot" className="mx-2" />
                                <div className="font-normal leading-6 font-Manrope text-sz16">3</div>
                                <img src={heart} alt="heart" className='mx-1' />
                            </div>
                        </div>
                        <div className='p-3 mb-4 font-medium leading-5 rounded bg-darkwhite text-sz18'>
                            <div className='text-blue'>(GENERAL) WhiteHatDAO Governance structure...</div>
                            <div className='flex items-center text-ligthgrey'>
                                <div className="font-normal leading-6 font-Manrope text-sz16">21d</div>
                                <img src={dot} alt="dot" className="mx-2" />
                                <div className="font-normal leading-6 font-Manrope text-sz16">3</div>
                                <img src={heart} alt="heart" className='mx-1' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-start leading-7 mb-11 text-sz20 gap-x-12'>
                    <div className='w-1/2 p-5 rounded bg-gray'>
                        <div className='flex items-center mb-4 font-bold leading-8 text-sz22'>TOP LINKS</div>
                        <div className='p-3 mb-4 font-medium leading-5 rounded bg-darkwhite text-sz18'>
                            <div className='mb-1 text-blue'>(GENERAL) WhiteHatDAO Governance structure...</div>
                            <div className='flex items-center leading-5 text-sz14 text-ligthgrey'>
                                www.nfthinker.com/profile
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 p-5 rounded bg-gray'>
                        <div className='flex items-center mb-4 font-bold leading-8 text-sz22'>MOST REPLIED TO</div>
                        <div className='flex p-3 mb-4 font-medium leading-5 rounded bg-darkwhite text-sz18'>
                            <img src={swol} alt="avatar" className='mr-3' />
                            <div className='flex flex-col'>
                                <div className='text-blue'>Swolchase</div>
                                <div className='flex items-center gap-x-1'><img src={reply} alt="reply" />3</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-start leading-7 text-sz20 gap-x-12'>
                    <div className='w-1/2 p-5 rounded bg-gray'>
                        <div className='flex items-center mb-4 font-bold leading-8 text-sz22'>MOST LIKED BY</div>
                        <div className='flex p-3 mb-4 font-medium leading-5 rounded bg-darkwhite text-sz18'>
                            <img src={swol} alt="avatar" className='mr-3' />
                            <div className='flex flex-col'>
                                <div className='text-blue'>Swolchase</div>
                                <div className='flex items-center gap-x-1'><img src={heart} alt="reply" />3</div>
                            </div>
                        </div>
                        <div className='flex p-3 mb-4 font-medium leading-5 rounded bg-darkwhite text-sz18'>
                            <img src={swol} alt="avatar" className='mr-3' />
                            <div className='flex flex-col'>
                                <div className='text-blue'>Swolchase</div>
                                <div className='flex items-center gap-x-1'><img src={heart} alt="reply" />3</div>
                            </div>
                        </div>
                        <div className='flex p-3 mb-4 font-medium leading-5 rounded bg-darkwhite text-sz18'>
                            <img src={swol} alt="avatar" className='mr-3' />
                            <div className='flex flex-col'>
                                <div className='text-blue'>Swolchase</div>
                                <div className='flex items-center gap-x-1'><img src={heart} alt="reply" />3</div>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 p-5 rounded bg-gray'>
                        <div className='flex items-center mb-4 font-bold leading-8 text-sz22'>MOST LIKED</div>
                        <div className='flex p-3 mb-4 font-medium leading-5 rounded bg-darkwhite text-sz18'>
                            <img src={swol} alt="avatar" className='mr-3' />
                            <div className='flex flex-col'>
                                <div className='text-blue'>Swolchase</div>
                                <div className='flex items-center gap-x-1'><img src={heart} alt="reply" />3</div>
                            </div>
                        </div>
                        <div className='flex p-3 mb-4 font-medium leading-5 rounded bg-darkwhite text-sz18'>
                            <img src={swol} alt="avatar" className='mr-3' />
                            <div className='flex flex-col'>
                                <div className='text-blue'>Swolchase</div>
                                <div className='flex items-center gap-x-1'><img src={heart} alt="reply" />3</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>         
        </div>
    )
}

export default Profile;