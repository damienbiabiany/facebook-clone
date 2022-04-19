import StoryCard from "./StoryCard"
import { getStorage, ref, getDownloadURL} from "firebase/storage";
import { db, storage } from "../firebase"

/*
  We need to get these infos from a database (firebase)
  https://firebase.google.com/docs/storage/web/download-files
*/

const stories = [
    {
       name: "Damien Biabiany",
       src: "/assets/images/story_Damien_Biabiany.jpg",
       profile: "/assets/images/profile_Damien_Biabiany.jpg"
    },
    {
        name: "Elon Musk",
        src: "/assets/images/story_Elon_Musk.jpg",
        profile: "/assets/images/profile_Elon_Musk.jpg"
    },
    {
        name: "Jeff Bezos",
        src: "/assets/images/story_Jeff_Bezos.png",
        profile: "/assets/images/profile_Jeff_Bezos.jpg"
    },
    {
        name: "Marc Hunt",
        src: "/assets/images/story_Mark_Hunt.jpg",
        profile: "/assets/images/profile_Mark_Hunt.jpg"
    },
    {
        name: "Jessica Lescotte",
        src: "/assets/images/story_Jessica_Lescotte.jpg",
        profile: "/assets/images/profile_Jessica_Lescotte.jpg"
    },
]

function Stories() {
  return (
    <div className="flex justify-center mx-auto space-x-3 stories--component">
        {stories.map((story) =>(
                <StoryCard key={story.name} name={story.name} src={story.src} profile={story.profile}/>
            ))}
    </div>
  )
}

export default Stories