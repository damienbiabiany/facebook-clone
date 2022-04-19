import {SearchIcon} from "@heroicons/react/outline"
import {DotsCircleHorizontalIcon, VideoCameraIcon} from "@heroicons/react/solid"

/*
  We need to get these infos from a database (firebase)
  https://firebase.google.com/docs/storage/web/download-files
*/

const contacts = [
    {src:"/assets/images_contacts/Kevin_Feige.jpg", name:"Kevin Feige"},
    {src:"/assets/images_contacts/Jeff_Bezos.jpg", name:"Jeff Bezos"},
    {src:"/assets/images_contacts/Denzel_Washington.jpg", name:"Denzel Washington"},
    {src:"/assets/images_contacts/Morgan_Freeman.jpg", name:"Morgan Freeman"},
    {src:"/assets/images_contacts/Elon_Musk.jpg", name:"Elon Musk"},
    {src:"/assets/images_contacts/Jennifer_Lawrence.jpg", name:"Jennifer Lawrence"},
    {src:"/assets/images_contacts/Eddy_Murphy.jpg", name:"Eddy Murphy"},
]
function Widgets() {
  return (
    <div className="widgets--components hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex  justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
            <VideoCameraIcon className="h-6"/>
            <SearchIcon className="h-6"/>
            <DotsCircleHorizontalIcon className="h-6"/>
        </div>

      </div>
    </div>
  )
}

export default Widgets