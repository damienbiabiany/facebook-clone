import InputBox from "./InputBox"
import Stories from "./Stories"
function Feed() {
  return (
    <div className="flex-grow h-screen pt-6 mr-4 overflow-y-auto feed--component pb-44 xl:mr-40">
        <div className="max-w-md mx-auto md:max-w-lg lg:max-w-2xl">
          {/* Stories Section */}
          <Stories/>
          {/* InputBox Section */}
          <InputBox/>
          
          {/* Posts Section*/}
        </div>

    </div>
  )
}

export default Feed