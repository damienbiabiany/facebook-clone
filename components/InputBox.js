import Image from 'next/image';
import { useSession } from "next-auth/react"
import { useRef } from "react"

/* Icons imports */
import { EmojiHappyIcon } from "@heroicons/react/outline"
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid"

/* firebase imports */
import {db} from "../firebase"
import {collection, serverTimestamp, addDoc } from "firebase/firestore";

function InputBox() {
  // Get the user authenticate source state from useSession hook
  const { data: session } = useSession()

  // Get the text for the input field
  const inputRef = useRef(null)

  const sendPost =(e) => {
    e.preventDefault();

    // If inputfield value is empty we not allow the user to send a post
    if(!inputRef.current.value) return

    try {

      // Add a new document with a generated id to the collection posts
      const docRef = addDoc(collection(db, 'posts'), {
        message: inputRef.current.value, // from text user input
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timesTamp: serverTimestamp(),
      });

    } catch (e) {
      console.error("Error adding document: ", e);
    }

      inputRef.current.value = ""; // clear the input value
    }

  return (
    <div className="p-2 mt-6 font-medium text-gray-500 bg-white shadow-md inputBox--component rounded-2xl">
        <div className='flex items-center p-4 space-x-4'>
            <Image  className="rounded-full"
                    src={session.user.image}
                    width={40}
                    height={40}
                    layout="fixed"
                    alt=""/>
            <form className="flex flex-1">
               <input className="flex-grow h-12 px-5 bg-gray-100 rounded-full focus:outline-none" type="text" ref={inputRef} placeholder={`What's on your mind,${session.user.name}`}/>
               <button hidden type="submit" onClick={sendPost}>Submit</button>
            </form>
        </div>
        <div className="flex p-3 border-t justify-evenly">
          <div className="inputIcon">
            <VideoCameraIcon className="text-red-500 h-7"/>
            <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
          </div>
          <div className="inputIcon">
            <CameraIcon className="text-green-300 h-7"/>
            <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
          </div>
          <div className="inputIcon">
            <EmojiHappyIcon className="text-yellow-300 h-7"/>
            <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
          </div>
        </div>
    </div>
  )
}

export default InputBox