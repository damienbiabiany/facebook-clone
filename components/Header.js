import Image from 'next/image';
import mypic from '../public/assets/images/facebook.svg'
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon
} from "@heroicons/react/solid"

import {
   FlagIcon,
   PlayIcon,
   SearchIcon,
   ShoppingCartIcon
} from "@heroicons/react/outline"

import HeaderIcon from './HeaderIcon'

function Header() {
  return (
    <div className='sticky top-0 z-50 flex items-center p-2 bg-white shadow-md lg:px-5'>

        {/* Left */}
        <div className="flex items-center">
            {/* Image Component does lazy loading */}
            <Image  src={mypic}
                    width={40}
                    height={40}
                    layout="fixed"
                    alt=""/>
            <div className="flex items-center p-2 ml-2 bg-gray-100 rounded-full">
                <SearchIcon className="h-6 text-gray-600"/>
                <input className="flex items-center ml-2 placeholder-gray-500 bg-transparent outline-none"
                    type="text"
                    placeholder='Search Facebook'/>
            </div>
        </div>

        {/* Center */}
        <div className="flex justify-center flex-grow">
            {/* bigger screen: space-x-6 */}
            {/* smaller screen: space-x-2 */}
            <div className="flex space-x-6 md:space-x-2">
                <HeaderIcon active Icon={HomeIcon}/>
                <HeaderIcon Icon={FlagIcon}/>
                <HeaderIcon Icon={PlayIcon}/>
                <HeaderIcon Icon={ShoppingCartIcon}/>
                <HeaderIcon Icon={UserGroupIcon}/>
            </div>
        </div>
        {/* Right */}
    </div>
  )
}

export default Header
