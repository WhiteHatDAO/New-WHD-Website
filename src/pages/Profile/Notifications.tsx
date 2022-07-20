import avatar from '../../assets/images/profile/avatar.png'
import mention from '../../assets/images/profile/mention.png'
import comment from '../../assets/images/profile/comment.png'
import heart from '../../assets/images/profile/heart.png'
import line from "../../assets/images/blogpost/line.png"

const Notifications = () => {
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
                <div className='flex items-center mb-12 font-bold leading-8 gap-x-7 text-sz22'>
                    <div>Summary</div>
                    <div>Activity</div>
                    <div className='px-5 py-1 rounded bg-darkwhite'>Notifications</div>
                    <div>Settings</div>
                </div>

                <div className='flex items-start gap-x-16 mb-11 font-Manrope'> 
                    <div className='w-1/4 p-5 rounded bg-gray'>
                        <div className='w-full px-4 py-3 font-semibold leading-6 rounded bg-lightgray text-blue text-sz24'>All</div>
                        <div className='pt-5 space-y-5 leading-6 text-sz16 px-middle'>
                            <div>Responses</div>
                            <div>Likes</div>
                            <div>Mentions</div>
                        </div>
                    </div>

                    <div className='w-3/4 rounded p-middle bg-gray'>
                        <div>
                            <div className='flex items-center mb-4 leading-5 text-sz20'>
                                <img src={comment} alt="comment" className='mr-2' />
                                Comment
                            </div>
                            <div className='font-medium leading-5 text-blue text-sz16'>Discord proposal; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        </div>
                        <img src={line} alt="line" className='w-full my-5' />
                        <div>
                            <div className='flex items-center mb-4 leading-5 text-sz20'>
                                <img src={heart} alt="heart" className='mr-2' />
                                Like
                            </div>
                            <div className='font-medium leading-5 text-blue text-sz16'>Should we host twitter spaces and how often should this be?</div>
                        </div>
                        <img src={line} alt="line" className='w-full my-5' />
                        <div>
                            <div className='flex items-center mb-4 leading-5 text-sz20'>
                                <img src={mention} alt="mention" className='mr-2' />
                                Mentions
                            </div>
                            <div className='font-medium leading-5 text-blue text-sz16'>@NFThinker Hosting space or @swolchase</div>
                        </div>
                        <img src={line} alt="line" className='w-full mt-5' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notifications;