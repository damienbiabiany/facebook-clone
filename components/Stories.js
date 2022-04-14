const stories = [
    {
       name: "Damien Biabiany",
       src: "../public/assets/images/story_Damien_Biabiany.jpg",
       profile: "../public/assets/images/profile_Damien_Biabiany.jpg"
    },
    {
        name: "Elon Musk",
        src: "../public/assets/images/story_Elon_Musk.jpg",
        profile: "../public/assets/images/profile_Elon_Musk.jpg"
    },
    {
        name: "Jeff Bezos",
        src: "../public/assets/images/story_Jeff_Bezos.jpg",
        profile: "../public/assets/images/profile_Jeff_Bezos.jpg"
    },
    {
        name: "Marc Hunt",
        src: "../public/assets/images/story_Mark_Hunt.jpg",
        profile: "../public/assets/images/profile_Mark_Hunt.jpg"
    },
    {
        name: "Jessica Lescotte",
        src: "../public/assets/images/story_Jessica_Lescotte.jpg",
        profile: "../public/assets/images/profile_Jessica_Lescotte.jpg"
    },
]

function Stories() {
  return (
    <div className="flex justify-center mx-auto space-x-3">
        {
            stories.map((story) =>(
                <StoryCard key={story.name} name={story.name} src={story.src} profile={story.profile}/>
            ))}
    </div>
  )
}

export default Stories