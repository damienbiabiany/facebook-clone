import Image from 'next/image';
import mypic from '../public/assets/images/facebook.svg'
import { useSession, signIn, signOut } from "next-auth/react"

function Login() {
  return (
    <div className="grid place-items-center">
        {/* Image Component does lazy loading */}
        {/* objectFit attribute keeps the aspect ration of the image */}
        <Image  src={mypic}
            width={400}
            height={400}
            layout="fixed"
            objectFit='contain'
            alt=""/>
        <h1 onClick={signIn} className="p-5 text-center text-white bg-blue-500 rounded-full cursor-pointer">Login with Facebook</h1>
    </div>
  )
}

export default Login