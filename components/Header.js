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

function Header() {
  return (
    <div>
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
           <div></div>
       </div>
        {/* Right */}
    </div>
  )
}

export default Header
