import avatar from '../../assets/images/profile/avatar.png'
import heart from '../../assets/images/profile/heart.png'
import pen from '../../assets/images/profile/pen.png'
import info from '../../assets/images/profile/info.png'
import up from '../../assets/images/profile/up.png'
import wallet from '../../assets/images/profile/wallet.png'
import deletion from '../../assets/images/profile/delete.png'
import swol from '../../assets/images/profile/swol.png'
import reply from '../../assets/images/profile/reply.png'
import dot from "../../assets/images/blogpost/dot.png"
import openfile from "../../assets/images/blogpost/openfile.png"
import line from "../../assets/images/blogpost/line.png"

const Settings = () => {
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
                    <div>Notifications</div>
                    <div className='px-5 py-1 rounded bg-darkwhite'>Settings</div>
                </div>

                <div className='flex items-start gap-x-16 mb-11 font-Manrope'> 
                    <div className='w-1/4 p-5 rounded bg-gray'>
                        <div className='w-full px-4 py-3 font-semibold leading-6 rounded bg-lightgray text-blue text-sz24'>All</div>
                        <div className='pt-5 space-y-5 leading-6 text-sz16 px-middle'>Profile</div>
                    </div>

                    <div className='w-3/4 py-5 rounded px-middle bg-gray'>
                        <div className='flex mb-10 gap-x-16'>
                            <div className='w-5/12 font-bold leading-6 text-sz22'>
                                <div className='mb-4'>Username</div>
                                <div className='flex items-center justify-between px-5 py-3 font-medium leading-5 rounded shadow-sm text-blue text-sz20 bg-gray'>
                                    <div>NF Thinker</div>
                                    <img src={pen} alt="pen" />
                                </div>
                            </div>
                            <div className='w-5/12 font-bold leading-6 text-sz22'>
                                <div className='mb-4'>Website</div>
                                <div className='flex items-center justify-between px-5 py-3 font-medium leading-5 rounded shadow-sm text-blue text-sz20 bg-gray'>
                                    <div>www.nfthinker.com</div>
                                    <img src={pen} alt="pen" />
                                </div>
                            </div>
                        </div>
                        
                        <div className='flex mb-10 gap-x-16'>
                            <div className='w-5/12 font-bold leading-6 text-sz22'>
                                <div className='mb-4'>Profile Picture</div>
                                <div className='flex items-center justify-start '>
                                    <img src={avatar} alt="avatar" className='mr-6' />
                                    <div className='flex items-center justify-center shadow-sm h-11 w-11'><img src={up} alt="up" /></div>
                                </div>
                            </div>
                            <div className='w-6/12 font-bold leading-6 text-sz22'>
                                <div className='mb-4'>Bio</div>
                                <textarea className="w-full p-3 leading-6 rounded-lg shadow-inner h-28 text-sz16 bg-lightgray" placeholder="Add a short bio about yourself"></textarea>
                            </div>
                        </div>

                        <div className='flex mb-10 gap-x-16'>
                            <div className='w-5/12 font-bold leading-6 text-sz22'>
                                <div className='mb-4'>Wallet Address</div>
                                <div className='flex items-center justify-between px-5 py-3 font-medium leading-5 rounded shadow-sm text-blue text-sz20 bg-gray'>
                                    <div>0xd0e4...31da49</div>
                                    <img src={wallet} alt="wallet" />
                                </div>
                            </div>
                            <div className='w-5/12 font-bold leading-6 text-sz22'>
                                <div className='mb-4'>Email Address</div>
                                <div className='flex items-center justify-between px-5 py-3 font-medium leading-5 rounded shadow-sm text-blue text-sz20 bg-gray'>
                                    <div>Nfthinker@gmail.com</div>
                                    <img src={pen} alt="pen" />
                                </div>
                            </div>
                        </div>

                        <div className='flex mb-10 gap-x-16'>
                            <div className='w-5/12 font-bold leading-6 text-sz22'>
                                <div className='mb-4'>Twitter</div>
                                <div className='flex items-center justify-between px-5 py-3 font-medium leading-5 rounded shadow-sm text-blue text-sz20 bg-gray'>
                                    <div>twitter.com/israelrex9</div>
                                    <img src={pen} alt="pen" />
                                </div>
                            </div>
                            <div className='w-5/12 font-bold leading-6 text-sz22'>
                                <div className='mb-4'>Github</div>
                                <div className='flex items-center justify-between px-5 py-3 font-medium leading-5 rounded shadow-sm text-blue text-sz20 bg-gray'>
                                    <div>github.com/israelrex9</div>
                                    <img src={pen} alt="pen" />
                                </div>
                            </div>
                        </div>

                        <div className='flex mb-10 gap-x-16'>
                            <div className='w-5/12 font-bold leading-6 text-sz22'>
                                <div className='mb-4'>Timezone</div>
                                <div className='flex items-center justify-between px-5 py-3 font-medium leading-5 rounded shadow-sm text-blue text-sz20 bg-gray'>
                                    <div>UTC +1</div>
                                    <img src={pen} alt="pen" />
                                </div>
                            </div>
                            <div className='w-5/12 font-bold leading-6 text-sz22'>
                                <div className='mb-4'>Discord ID</div>
                                <div className='flex items-center justify-between px-5 py-3 font-medium leading-5 rounded shadow-sm text-blue text-sz20 bg-gray'>
                                    <div>israelrex#3613</div>
                                    <img src={pen} alt="pen" />
                                </div>
                            </div>
                        </div>
                        <div className='w-5/12 mb-16 font-bold leading-6 text-sz22'>
                            <div className='flex items-center mb-4 gap-x-1'>
                                Project or DAOs
                                <img src={info} alt="info" />
                            </div>
                            <textarea className="w-full p-4 leading-6 border rounded-lg shadow-inner h-28 border-blue text-sz16 bg-lightgray" placeholder="List of projects currently contributing at"></textarea>
                        </div>

                        <div className="flex items-center justify-start mb-8">
                            <div className="mr-10 rounded shadow-xl p-border bg-blue">
                                <div className="flex px-6 py-2 font-bold leading-8 text-center rounded bg-gray text-blue font-Manrope text-sz20">
                                    Save Changes
                                </div>
                            </div>
                            <div className="flex items-center mr-10 font-semibold leading-8 gap-x-3 text-pink text-sz20 font-Manrope">
                                <img src={deletion} alt="delete" />
                                Delete my account
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;