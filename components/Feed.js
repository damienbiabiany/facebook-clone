import InputBox from "./InputBox"
import Posts from "./Posts"
import Stories from "./Stories"

function Feed({posts}) {
  return (
    <div className="flex-grow h-screen pt-6 mr-4 overflow-y-auto feed--component pb-44 xl:mr-40 scrollbar-hide">
        <div className="max-w-md mx-auto md:max-w-lg lg:max-w-2xl">
          {/* Stories Section */}
          <Stories/>

          {/* InputBox Section */}
          <InputBox/>

          {/* Posts Section*/}
          <Posts posts={posts}/>
        </div>

    </div>
  )
}

export default Feed